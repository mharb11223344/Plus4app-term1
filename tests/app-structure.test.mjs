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
  const curriculum = await read("app/curriculum.ts");
  assert.equal((curriculum.match(/^  u[1-6]l[1-5]:/gm) ?? []).length, 30);
  assert.equal((curriculum.match(/^  u[1-6]l6:/gm) ?? []).length, 6);
});

test("builds 30 lesson questions and 50 unit-bank questions", async () => {
  const curriculumModule = await importTypeScript(await read("app/curriculum.ts"));
  globalThis.__connectPlusLessonContent = curriculumModule.lessonContent;
  const questionsSource = (await read("app/questions.ts")).replace(
    'import { lessonContent } from "./curriculum";',
    "const lessonContent = globalThis.__connectPlusLessonContent;",
  );
  const questionsModule = await importTypeScript(questionsSource);

  assert.equal(Object.keys(curriculumModule.lessonContent).length, 30);
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
  for (let unit = 1; unit <= 6; unit += 1) {
    assert.equal(questionsModule.generateUnitBank(unit).length, 50, `Unit ${unit} bank total`);
  }
  delete globalThis.__connectPlusLessonContent;
});

test("keeps all visible app content in English", async () => {
  const appFiles = (await readdir(new URL("app/", root))).filter((file) => /\.(ts|tsx|css)$/.test(file));
  const source = (await Promise.all(appFiles.map((file) => read(`app/${file}`)))).join("\n");
  assert.doesNotMatch(source, /[\u0600-\u06ff]/);
  assert.doesNotMatch(source, /Future Jobs/i);
  assert.match(source, /Mrs\. Mona Harb/);
  assert.match(source, /No questions · No score/);
});
