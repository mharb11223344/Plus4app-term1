"use client";

import { useMemo, useState } from "react";
import type { Question } from "./questions";

type QuizPlayerProps = {
  quizId: string;
  title: string;
  questions: Question[];
  accent: string;
  onExit: () => void;
  onComplete: (quizId: string, score: number, total: number) => void;
};

function questionLabel(type: Question["type"]) {
  if (type === "mcq") return "Choose the answer";
  if (type === "true-false") return "True or false";
  if (type === "matching") return "Match the pairs";
  return "Build the sentence";
}

export default function QuizPlayer({ quizId, title, questions, accent, onExit, onComplete }: QuizPlayerProps) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState<string | boolean | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [orderedIndexes, setOrderedIndexes] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const selectedWords = useMemo(
    () => question?.type === "ordering" ? orderedIndexes.map((wordIndex) => question.words[wordIndex]) : [],
    [orderedIndexes, question],
  );

  if (!question) {
    return <main className="quiz-page"><p>No questions are available for this lesson.</p><button onClick={onExit}>Go back</button></main>;
  }

  const canSubmit = question.type === "matching"
    ? question.pairs.every((pair) => matches[pair.left])
    : question.type === "ordering"
      ? orderedIndexes.length === question.words.length
      : choice !== null;

  function checkAnswer() {
    if (!canSubmit || submitted) return;
    let isCorrect = false;
    if (question.type === "mcq") isCorrect = choice === question.answer;
    if (question.type === "true-false") isCorrect = choice === question.answer;
    if (question.type === "matching") isCorrect = question.pairs.every((pair) => matches[pair.left] === pair.right);
    if (question.type === "ordering") isCorrect = selectedWords.join(" ") === question.answer.join(" ");
    setCorrect(isCorrect);
    setSubmitted(true);
    if (isCorrect) setScore((current) => current + 10);
  }

  function nextQuestion() {
    if (index === questions.length - 1) {
      const finalScore = score + (correct ? 0 : 0);
      setFinished(true);
      onComplete(quizId, finalScore, questions.length * 10);
      return;
    }
    setIndex((current) => current + 1);
    setChoice(null);
    setMatches({});
    setOrderedIndexes([]);
    setSubmitted(false);
    setCorrect(false);
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setChoice(null);
    setMatches({});
    setOrderedIndexes([]);
    setSubmitted(false);
    setCorrect(false);
    setFinished(false);
  }

  const percentage = Math.round((score / (questions.length * 10)) * 100);
  const stars = percentage >= 90 ? 3 : percentage >= 70 ? 2 : 1;

  if (finished) {
    return (
      <main className="quiz-page quiz-finish" style={{ "--quiz-accent": accent } as React.CSSProperties}>
        <div className="celebration-card">
          <span className="celebration-kicker">Challenge complete</span>
          <div className="big-stars" aria-label={`${stars} stars`}>{Array.from({ length: 3 }, (_, star) => <span className={star < stars ? "earned" : ""} key={star}>★</span>)}</div>
          <h1>Brilliant work!</h1>
          <p>You earned <strong>{score} XP</strong> out of {questions.length * 10}.</p>
          <div className="score-ring"><strong>{percentage}%</strong><span>accuracy</span></div>
          <div className="finish-actions"><button className="soft-button" onClick={onExit}>Back to learning</button><button className="quiz-primary" onClick={restart}>Try again</button></div>
        </div>
      </main>
    );
  }

  return (
    <main className="quiz-page" style={{ "--quiz-accent": accent } as React.CSSProperties}>
      <section className="quiz-topbar">
        <button className="quiz-exit" onClick={onExit} aria-label="Exit challenge">×</button>
        <div className="quiz-progress"><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
        <div className="quiz-xp">★ {score} XP</div>
      </section>
      <section className="question-card">
        <div className="question-meta"><span>{questionLabel(question.type)}</span><b>{index + 1} / {questions.length}</b></div>
        <p className="quiz-title">{title}</p>
        <h1>{question.prompt}</h1>

        {question.type === "mcq" && <div className="answer-grid">{question.options.map((option, optionIndex) => <button disabled={submitted} className={choice === option ? "selected" : ""} onClick={() => setChoice(option)} key={option}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>)}</div>}

        {question.type === "true-false" && <div className="true-false-grid"><button disabled={submitted} className={choice === true ? "selected" : ""} onClick={() => setChoice(true)}><span>✓</span>True</button><button disabled={submitted} className={choice === false ? "selected" : ""} onClick={() => setChoice(false)}><span>×</span>False</button></div>}

        {question.type === "matching" && <div className="matching-grid">{question.pairs.map((pair) => <label key={pair.left}><strong>{pair.left}</strong><span>→</span><select disabled={submitted} value={matches[pair.left] ?? ""} onChange={(event) => setMatches({ ...matches, [pair.left]: event.target.value })}><option value="">Choose a meaning</option>{question.options.map((option) => <option value={option} key={option}>{option}</option>)}</select></label>)}</div>}

        {question.type === "ordering" && <div className="ordering-area"><div className="sentence-line">{selectedWords.length ? selectedWords.map((word, position) => <button disabled={submitted} key={`${word}-${position}`} onClick={() => setOrderedIndexes(orderedIndexes.filter((_, itemIndex) => itemIndex !== position))}>{word}</button>) : <span>Tap the words to build your sentence.</span>}</div><div className="word-bank">{question.words.map((word, wordIndex) => <button disabled={submitted || orderedIndexes.includes(wordIndex)} className={orderedIndexes.includes(wordIndex) ? "used" : ""} onClick={() => setOrderedIndexes([...orderedIndexes, wordIndex])} key={`${word}-${wordIndex}`}>{word}</button>)}</div></div>}

        {!submitted ? <button className="check-button" disabled={!canSubmit} onClick={checkAnswer}>Check my answer</button> : <div className={correct ? "feedback correct" : "feedback incorrect"}><div><span>{correct ? "★" : "↻"}</span><div><strong>{correct ? "Sparkling answer!" : "Good try — learn and grow!"}</strong><p>{question.explanation}</p></div></div><button onClick={nextQuestion}>{index === questions.length - 1 ? "See my result" : "Next question"} →</button></div>}
      </section>
    </main>
  );
}

