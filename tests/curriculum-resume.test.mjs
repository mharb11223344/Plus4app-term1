import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const read = file => readFile(new URL(`../${file}`, import.meta.url),'utf8');
const load = source => import(`data:text/javascript;base64,${Buffer.from(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText).toString('base64')}`);
const curriculum = await load(await read('app/curriculum.ts'));
globalThis.__curriculum = curriculum;
const restore = await load((await read('app/curriculum-progress.ts')).replace("import { getBankKey, getLessonKey, lessonKeys } from './curriculum';",'const {getBankKey,getLessonKey,lessonKeys} = globalThis.__curriculum;'));

test('textbook order uses new stories without reusing removed lesson identities',()=>{
  const expected = [
    ['Our Amazing Bodies','Our Senses','Language: Present Simple','Literature Corner: Alice','Writing Paragraphs'],
    ['Vertebrates','Language: Comparatives and Superlatives','CLIL: Art','Literature Corner: Learning from the Jungle','Writing: Linking Words and Phrases'],
    ['My Community','Language: Past Simple','CLIL: Music','Literature Corner: The Kind Prince and the Bird','Writing: Using Topic Sentences'],
    ['Natural Resources','Renewable Energy','Language: Possessive Adjectives','Teamwork','Literature Corner: Journey to a New Earth'],
    ['Transportation','Language: Predictions with Will','Tech Jobs','CLIL: ICT — Passwords and Passphrases','Writing: Structuring a Paragraph'],
  ];
  assert.deepEqual(curriculum.lessonKeys.map(unit=>unit.slice(0,5).map(key=>curriculum.lessonContent[key].title)),expected);
  assert.equal(curriculum.lessonContent.u1l4,undefined);
  assert.equal(curriculum.lessonContent.u2l3,undefined);
  assert.equal(curriculum.lessonContent.u3l3,undefined);
  assert.ok(!curriculum.lessonKeys.flat().some(key=>/^u4l/.test(key)));
});

test('question 20 and XP follow continued lessons after unit and lesson moves',()=>{
  for (const [quizId,oldUnit,oldIndex,unitId,lessonIndex] of [
    ['u1l1',1,0,1,0],['u2l4',2,3,2,2],['u3l4',3,3,3,2],['u5l1',5,0,4,0],['u5l3',5,2,4,1],['u5l5',5,4,4,3],['u6l1',6,0,5,0],
  ]) {
    const result=restore.restoreCheckpoint({[quizId]:{score:50,total:300}},{quizId,unitId:oldUnit,lessonIndex:oldIndex,mode:'lesson',questionIndex:19,score:80});
    assert.equal(result.checkpoint.unitId,unitId);
    assert.equal(result.checkpoint.lessonIndex,lessonIndex);
    assert.equal(result.checkpoint.questionIndex,19);
    assert.equal(result.checkpoint.score,80);
    assert.equal(result.progress[quizId].score,50);
    assert.equal(restore.restoreCheckpoint(result.progress,result.checkpoint).checkpoint.unitId,unitId);
  }
});

test('removed quiz checkpoints retain earned XP without completing replacement stories',()=>{
  for (const quizId of ['u1l4','u2l3','u3l3','u4l1','u5l2','u5l4','u1-bank','u6-bank']) {
    const old = {[quizId]:{score:50,total:300}};
    const result=restore.restoreCheckpoint(old,{quizId,unitId:4,lessonIndex:0,mode:quizId.includes('bank')?'bank':'lesson',questionIndex:19,score:80});
    assert.equal(result.checkpoint,null);
    assert.equal(result.progress[quizId].score,50);
    assert.equal(result.progress[`archived-checkpoint:${quizId}`].score,30);
    assert.equal(restore.activeLessonXp(result.progress),0);
    const retry=restore.restoreCheckpoint(result.progress,{quizId,unitId:4,lessonIndex:0,mode:'lesson',questionIndex:19,score:80});
    assert.equal(Object.values(retry.progress).reduce((sum,item)=>sum+item.score,0),80);
  }
});

test('legacy achievements count toward XP without marking new lessons complete',()=>{
  const merged={u4l1:{score:70,total:300},u5l1:{score:90,total:300},'u1l4-2026':{score:80,total:300}};
  assert.equal(merged.u4l1.score,70);
  assert.equal(merged.u5l1.score,90);
  assert.equal(merged['u1l4-2026'].score,80);
  assert.equal(restore.activeLessonXp(merged),170);
  assert.equal(Object.values(merged).reduce((sum,item)=>sum+item.score,0),240);
});

test('teacher controls follow the moved content and keep previous open or closed state',()=>{
  assert.equal(restore.controlUnitId(4),5);
  assert.equal(restore.controlUnitId(5),6);
  assert.equal(restore.unitXp({u5l1:{score:90,total:300},u4l1:{score:300,total:300}},4),90);
});

test('both poetry sections and term-end projects are available',async()=>{
  const {supplementaryContent}=await load(await read('app/supplementary.ts'));
  assert.deepEqual(supplementaryContent.rain.bookPages,[58,59]);
  assert.deepEqual(supplementaryContent.caterpillar.bookPages,[110,111]);
  assert.equal(supplementaryContent.review2.subtitle,'Units 4–5 · Myself and Others');
  assert.ok(supplementaryContent.presentation && supplementaryContent['term-project']);
});
