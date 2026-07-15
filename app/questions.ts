import { lessonContent } from "./curriculum";

export type McqQuestion = {
  id: string;
  type: "mcq";
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type TrueFalseQuestion = {
  id: string;
  type: "true-false";
  prompt: string;
  answer: boolean;
  explanation: string;
};

export type MatchingQuestion = {
  id: string;
  type: "matching";
  prompt: string;
  pairs: { left: string; right: string }[];
  options: string[];
  explanation: string;
};

export type OrderingQuestion = {
  id: string;
  type: "ordering";
  prompt: string;
  words: string[];
  answer: string[];
  explanation: string;
};

export type Question = McqQuestion | TrueFalseQuestion | MatchingQuestion | OrderingQuestion;

function hash(text: string) {
  let value = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const result = [...items];
  let state = hash(seed) || 1;
  for (let index = result.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export function generateLessonQuestions(lessonKey: string): Question[] {
  const lesson = lessonContent[lessonKey];
  if (!lesson) return [];

  const words = lesson.definitions.map(([word]) => word);
  const multipleChoice: McqQuestion[] = lesson.definitions.slice(0, 10).map(([word, definition], index) => {
    const distractors = [words[(index + 3) % words.length], words[(index + 6) % words.length], words[(index + 8) % words.length]]
      .filter((item) => item !== word);
    return {
      id: `${lessonKey}-mcq-${index + 1}`,
      type: "mcq",
      prompt: `Which word means “${definition}”?`,
      options: seededShuffle([word, ...distractors].slice(0, 4), `${lessonKey}-mcq-${index}`),
      answer: word,
      explanation: `${word} means ${definition}.`,
    };
  });

  const trueFalse: TrueFalseQuestion[] = lesson.checks.slice(0, 6).map(([statement, answer], index) => ({
    id: `${lessonKey}-tf-${index + 1}`,
    type: "true-false",
    prompt: statement,
    answer,
    explanation: answer ? "This statement is correct." : "This statement is not correct. Check the lesson note and try to say the correct fact.",
  }));

  const matching: MatchingQuestion[] = Array.from({ length: 7 }, (_, index) => {
    const pairs = Array.from({ length: 4 }, (__, pairIndex) => {
      const [left, right] = lesson.definitions[(index + pairIndex * 2) % lesson.definitions.length];
      return { left, right };
    });
    return {
      id: `${lessonKey}-match-${index + 1}`,
      type: "matching",
      prompt: "Match each word to its meaning.",
      pairs,
      options: seededShuffle(pairs.map((pair) => pair.right), `${lessonKey}-match-${index}`),
      explanation: "Each word is now connected to its correct lesson meaning.",
    };
  });

  const ordering: OrderingQuestion[] = lesson.sentences.slice(0, 7).map((sentence, index) => {
    const answer = sentence.split(/\s+/);
    return {
      id: `${lessonKey}-order-${index + 1}`,
      type: "ordering",
      prompt: "Put the words in the correct order.",
      words: seededShuffle(answer, `${lessonKey}-order-${index}`),
      answer,
      explanation: sentence,
    };
  });

  return [...multipleChoice, ...trueFalse, ...matching, ...ordering];
}

export function generateUnitBank(unitId: number): Question[] {
  const selection = [0, 2, 4, 7, 10, 12, 16, 19, 23, 27];
  return Array.from({ length: 5 }, (_, lessonIndex) => {
    const lessonKey = `u${unitId}l${lessonIndex + 1}`;
    return selection.map((questionIndex, bankIndex) => {
      const question = generateLessonQuestions(lessonKey)[questionIndex];
      return { ...question, id: `u${unitId}-bank-${lessonIndex + 1}-${bankIndex + 1}` } as Question;
    });
  }).flat();
}

