"use client";

import type { LessonContent, ProjectContent } from "./curriculum";

type LessonViewProps = {
  unitNumber: number;
  unitTitle: string;
  lessonNumber: number;
  accent: string;
  soft: string;
  cover?: string;
  content?: LessonContent;
  project?: ProjectContent;
  onBack: () => void;
  onPractice: () => void;
};

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const message = new SpeechSynthesisUtterance(text);
  message.lang = "en-GB";
  message.rate = 0.84;
  window.speechSynthesis.speak(message);
}

export default function LessonView({ unitNumber, unitTitle, lessonNumber, accent, soft, cover, content, project, onBack, onPractice }: LessonViewProps) {
  const title = content?.title ?? project?.title ?? "Lesson";
  const strapline = content?.strapline ?? project?.strapline ?? "";

  return (
    <main className="lesson-page" style={{ "--accent": accent, "--soft": soft } as React.CSSProperties}>
      <section className="lesson-cover" style={{ backgroundImage: `linear-gradient(90deg, rgba(49,28,67,.9), rgba(49,28,67,.47), rgba(49,28,67,.15)), url(${cover})` }}>
        <button className="back-button" onClick={onBack}>← Unit {unitNumber}</button>
        <div className="lesson-cover-copy">
          <span>{project ? "View-only project" : `Unit ${unitNumber} · Lesson ${lessonNumber}`}</span>
          <h1>{title}</h1>
          <p>{strapline}</p>
          {project ? <div className="view-only-pill">No questions · No score · Explore at your own pace</div> : <div className="lesson-reward-pill">30 interactive challenges · Up to 300 XP</div>}
        </div>
      </section>

      {content && (
        <section className="learn-layout">
          <aside className="lesson-sidebar">
            <span className="sidebar-label">You will learn to</span>
            <ol>{content.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ol>
            <button className="listen-button" onClick={() => speak(`${title}. ${content.summary}`)}>▶ Listen to the lesson summary</button>
          </aside>

          <div className="lesson-main">
            <section className="content-block vocabulary-block">
              <div className="content-heading"><div><span>Word power</span><h2>Vocabulary</h2></div><p>Tap the speaker to hear each word.</p></div>
              <div className="vocabulary-grid">{content.definitions.map(([word, definition]) => <article key={word}><button aria-label={`Listen to ${word}`} onClick={() => speak(word)}>♪</button><strong>{word}</strong><p>{definition}</p></article>)}</div>
            </section>

            <section className="content-block language-block">
              <div className="section-icon">Aa</div>
              <div><span>Language focus</span><h2>{content.languageTitle}</h2><ul>{content.languageNotes.map((note) => <li key={note}>{note}</li>)}</ul></div>
            </section>

            <section className="content-block reading-block">
              <div className="content-heading"><div><span>Read and understand</span><h2>{content.readingTitle}</h2></div><button className="round-listen" aria-label="Listen to reading summary" onClick={() => speak(content.summary)}>▶</button></div>
              <p className="reading-summary">{content.summary}</p>
              <div className="key-ideas"><h3>Key ideas</h3>{content.keyIdeas.map((idea, index) => <div key={idea}><span>{index + 1}</span><p>{idea}</p></div>)}</div>
            </section>

            <section className="content-block notes-block">
              <div><span>Smart notes</span><h2>Remember this</h2></div>
              <div>{content.tips.map((tip) => <p key={tip}>✦ {tip}</p>)}</div>
            </section>

            <section className="practice-callout">
              <div><span>Ready to sparkle?</span><h2>Play the 30-question lesson challenge</h2><p>Vocabulary, true or false, matching and sentence building are waiting for you.</p></div>
              <button onClick={onPractice}>Start practice →</button>
            </section>
          </div>
        </section>
      )}

      {project && (
        <section className="project-layout">
          <div className="project-intro"><span>Project overview</span><h2>A creative mission for your team</h2><p>{project.overview}</p></div>
          <div className="project-grid">
            <article><span className="project-number">01</span><h3>Useful language</h3><ul>{project.usefulLanguage.map((line) => <li key={line}>{line}</li>)}</ul></article>
            <article><span className="project-number">02</span><h3>Project steps</h3><ol>{project.steps.map((step) => <li key={step}>{step}</li>)}</ol></article>
            <article className="final-product"><span className="project-number">03</span><h3>Final product</h3><p>{project.finalProduct}</p><div className="view-only-note">This lesson is for reading and project inspiration only. It has no exercise button, score or stars.</div></article>
          </div>
          <button className="soft-button project-back" onClick={onBack}>Back to {unitTitle}</button>
        </section>
      )}
    </main>
  );
}

