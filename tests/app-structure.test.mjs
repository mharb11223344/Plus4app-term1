import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

async function importTypeScript(source) {
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`);
}

test("contains the exact assessed lesson and project structure", async () => {
  const curriculum = await importTypeScript(await read("app/curriculum.ts"));
  assert.equal(Object.keys(curriculum.lessonContent).length, 25);
  assert.equal(Object.keys(curriculum.projectContent).length, 5);
  assert.equal(curriculum.lessonKeys.length, 5);
  assert.ok(curriculum.lessonKeys.every(unit => unit.length === 6));
});

test("builds 30 lesson questions and 50 unit-bank questions", async () => {
  const curriculumModule = await importTypeScript(await read("app/curriculum.ts"));
  globalThis.__connectPlusLessonContent = curriculumModule.lessonContent;
  globalThis.__connectPlusGetLessonKey = curriculumModule.getLessonKey;
  const questionsSource = (await read("app/questions.ts")).replace(
    'import { lessonContent, getLessonKey } from "./curriculum";',
    "const lessonContent = globalThis.__connectPlusLessonContent; const getLessonKey = globalThis.__connectPlusGetLessonKey;",
  );
  const questionsModule = await importTypeScript(questionsSource);

  assert.equal(Object.keys(curriculumModule.lessonContent).length, 25);
  for (const [key, lesson] of Object.entries(curriculumModule.lessonContent)) {
    assert.equal(lesson.definitions.length, 10, `${key} vocabulary count`);
    assert.equal(lesson.checks.length, 6, `${key} true/false count`);
    assert.equal(lesson.sentences.length, 7, `${key} ordering count`);
    const questions = questionsModule.generateLessonQuestions(key);
    assert.equal(questions.length, 30, `${key} question total`);
    const typeTotals = Object.fromEntries(
      Object.entries(Object.groupBy(questions, (question) => question.type)).map(([type, items]) => [type, items.length]),
    );
    assert.deepEqual(typeTotals, { mcq: 10, "true-false": 6, matching: 7, ordering: 7 }, `${key} question-type totals`);
  }
  for (let unit = 1; unit <= 5; unit += 1) {
    const bank = questionsModule.generateUnitBank(unit);
    assert.equal(bank.length, 50, `Unit ${unit} bank total`);
    assert.ok(bank.every(question => question.prompt && question.type), `Unit ${unit} has no empty questions`);
  }
  delete globalThis.__connectPlusLessonContent;
  delete globalThis.__connectPlusGetLessonKey;
});

test("keeps all visible app content in English", async () => {
  const appFiles = (await readdir(new URL("app/", root))).filter((file) => /\.(ts|tsx|css)$/.test(file));
  const source = (await Promise.all(appFiles.map((file) => read(`app/${file}`)))).join("\n");
  assert.doesNotMatch(source, /[\u0600-\u06ff]/);
  assert.doesNotMatch(source, /Future Jobs/i);
  assert.match(source, /Mrs\. Mona Harb/);
  assert.match(source, /No questions · No score/);
});
