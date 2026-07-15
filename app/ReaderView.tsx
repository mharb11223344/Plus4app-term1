"use client";

import type { SupplementaryContent } from "./supplementary";

type ReaderViewProps = { content: SupplementaryContent; onBack: () => void };

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const message = new SpeechSynthesisUtterance(text);
  message.lang = "en-GB";
  message.rate = .84;
  window.speechSynthesis.speak(message);
}

export default function ReaderView({ content, onBack }: ReaderViewProps) {
  return (
    <main className={`reader-page reader-${content.kind}`} style={{ "--reader-color": content.color, "--reader-soft": content.soft } as React.CSSProperties}>
      <section className="reader-hero has-cover" style={{ backgroundImage: `linear-gradient(90deg, rgba(39,22,54,.9), rgba(39,22,54,.58) 48%, rgba(39,22,54,.12)), url(${content.cover})` }}>
        <button className="back-button" onClick={onBack}>← Back home</button>
        <div className="reader-orb" aria-hidden="true">{content.kind === "story" ? "✦" : content.kind === "review" ? "✓" : "≈"}</div>
        <span>{content.subtitle}</span>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
        <button className="reader-listen" onClick={() => speak(`${content.title}. ${content.intro}`)}>▶ Listen to introduction</button>
      </section>
      <section className="reader-content">
        <div className="reader-vocabulary">
          <div><span>Words to know</span><h2>Reader vocabulary</h2></div>
          <div className="reader-word-grid">{content.vocabulary.map(([word, definition]) => <button onClick={() => speak(word)} key={word}><strong>{word}</strong><small>{definition}</small><span>♪</span></button>)}</div>
        </div>
        <div className="reader-sections">{content.sections.map((section, index) => <article key={section.heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.heading}</h2><p>{section.text}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}<button onClick={() => speak(`${section.heading}. ${section.text}`)}>Listen ♪</button></div></article>)}</div>
        <div className="reader-takeaway"><span>Big idea</span><h2>{content.takeaway}</h2></div>
      </section>
    </main>
  );
}
