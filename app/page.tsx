"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import LessonView from "./LessonView";
import QuizPlayer from "./QuizPlayer";
import ReaderView from "./ReaderView";
import { getLessonKey, getBankKey, lessonContent, projectContent } from "./curriculum";
import { generateLessonQuestions, generateUnitBank } from "./questions";
import { supplementaryContent } from "./supplementary";
import { activeLessonXp, controlUnitId, curriculumVersion, restoreCheckpoint, unitXp as getUnitXp } from "./curriculum-progress";
import type { Progress, QuizCheckpoint } from "./curriculum-progress";

type Lesson = {
  title: string;
  subtitle: string;
  project?: boolean;
};

type Unit = {
  id: number;
  title: string;
  theme: string;
  eyebrow: string;
  accent: string;
  soft: string;
  icon: string;
  cover?: string;
  lessons: Lesson[];
};

type Student = {
  name: string;
  className: string;
  school: string;
};

const units: Unit[] = [
  {
    "id": 1,
    "title": "What Can I Do?",
    "theme": "I Discover Myself",
    "eyebrow": "Body, senses & stories",
    "accent": "#f264a6",
    "soft": "#fff0f7",
    "icon": "✦",
    "cover": "/assets/unit-1-cover.webp",
    "lessons": [
      {
        "title": "Our Amazing Bodies",
        "subtitle": "Body systems and healthy habits"
      },
      {
        "title": "Our Senses",
        "subtitle": "How we understand the world"
      },
      {
        "title": "Language: Present Simple",
        "subtitle": "Facts, routines and negative forms"
      },
      {
        "title": "Literature Corner: Alice",
        "subtitle": "Alice and the white rabbit"
      },
      {
        "title": "Writing Paragraphs",
        "subtitle": "Titles and healthy lifestyles"
      },
      {
        "title": "Summer Camp Project",
        "subtitle": "Plan a healthy summer camp",
        "project": true
      }
    ]
  },
  {
    "id": 2,
    "title": "Plants and Animals",
    "theme": "I Discover Myself",
    "eyebrow": "Nature, habitats & colour",
    "accent": "#6d58d9",
    "soft": "#f1efff",
    "icon": "❀",
    "cover": "/assets/unit-2-cover.webp",
    "lessons": [
      {
        "title": "Vertebrates",
        "subtitle": "Five fascinating animal groups"
      },
      {
        "title": "Language: Comparatives and Superlatives",
        "subtitle": "Comparatives and superlatives"
      },
      {
        "title": "CLIL: Art",
        "subtitle": "Primary, secondary, warm and cool colours"
      },
      {
        "title": "Literature Corner: Learning from the Jungle",
        "subtitle": "Mowgli and different animal abilities"
      },
      {
        "title": "Writing: Linking Words and Phrases",
        "subtitle": "Connecting ideas about water lilies"
      },
      {
        "title": "Micro-habitat Project",
        "subtitle": "Explore a micro-habitat",
        "project": true
      }
    ]
  },
  {
    "id": 3,
    "title": "My World",
    "theme": "I Discover Myself",
    "eyebrow": "Community, history & music",
    "accent": "#ef8b4c",
    "soft": "#fff3e9",
    "icon": "♫",
    "cover": "/assets/unit-3-cover.webp",
    "lessons": [
      {
        "title": "My Community",
        "subtitle": "People, places and citizenship"
      },
      {
        "title": "Language: Past Simple",
        "subtitle": "Ancient Egypt and regular and irregular verbs"
      },
      {
        "title": "CLIL: Music",
        "subtitle": "Traditional Egyptian sounds"
      },
      {
        "title": "Literature Corner: The Kind Prince and the Bird",
        "subtitle": "The Kind Prince and the Bird"
      },
      {
        "title": "Writing: Using Topic Sentences",
        "subtitle": "Folk dancing and topic sentences"
      },
      {
        "title": "Tourist Guide Project",
        "subtitle": "Create a tourist guide",
        "project": true
      }
    ]
  },
  {
    "id": 4,
    "title": "Resources in Our World",
    "theme": "Myself and Others",
    "eyebrow": "Energy, teamwork & our planet",
    "accent": "#e8aa2e",
    "soft": "#fff8df",
    "icon": "☀",
    "cover": "/assets/unit-5-cover.webp",
    "lessons": [
      {
        "title": "Natural Resources",
        "subtitle": "Renewable and non-renewable resources"
      },
      {
        "title": "Renewable Energy",
        "subtitle": "Solar, wind, wave and tidal power"
      },
      {
        "title": "Language: Possessive Adjectives",
        "subtitle": "His, her, their and a job interview"
      },
      {
        "title": "Teamwork",
        "subtitle": "Team values and a job application"
      },
      {
        "title": "Literature Corner: Journey to a New Earth",
        "subtitle": "Journey to a New Earth"
      },
      {
        "title": "Eco-vehicle Project",
        "subtitle": "Design an eco-friendly vehicle",
        "project": true
      }
    ]
  },
  {
    "id": 5,
    "title": "Let’s Work",
    "theme": "Myself and Others",
    "eyebrow": "Transport, technology & careers",
    "accent": "#438ad9",
    "soft": "#eaf5ff",
    "icon": "⚡",
    "cover": "/assets/unit-6-cover.webp",
    "lessons": [
      {
        "title": "Transportation",
        "subtitle": "Travel by air, rail, road and water"
      },
      {
        "title": "Language: Predictions with Will",
        "subtitle": "Future predictions with will"
      },
      {
        "title": "Tech Jobs",
        "subtitle": "Exciting technology careers"
      },
      {
        "title": "CLIL: ICT — Passwords and Passphrases",
        "subtitle": "Be safe and smart online"
      },
      {
        "title": "Writing: Structuring a Paragraph",
        "subtitle": "A Fun Job and paragraph structure"
      },
      {
        "title": "Young Entrepreneurs",
        "subtitle": "Plan a small business",
        "project": true
      }
    ]
  }
];

const emptyStudent: Student = { name: "", className: "", school: "" };
function portalUnitOpen(id: number) {
  if (typeof window === 'undefined' || window.top === window) return true;
  try { const row = JSON.parse(localStorage.getItem('mona-unit-control-Plus4app-term1') || '{}'); return !Array.isArray(row.openUnits) || row.openUnits.includes(controlUnitId(id)); }
  catch { return true; }
}

export default function Home() {
  const [student, setStudent] = useState<Student>(emptyStudent);
  const [draftStudent, setDraftStudent] = useState<Student>(emptyStudent);
  const [started, setStarted] = useState(false);
  const [view, setView] = useState<"home" | "unit" | "lesson" | "quiz" | "reader" | "about">("home");
  const [selectedUnitId, setSelectedUnitId] = useState(1);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [quizMode, setQuizMode] = useState<"lesson" | "bank">("lesson");
  const [selectedSupplementaryId, setSelectedSupplementaryId] = useState("coral");
  const [progress, setProgress] = useState<Progress>({}); const [checkpoint, setCheckpoint] = useState<QuizCheckpoint | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      const saved = window.localStorage.getItem("connect-plus-student");
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as Student;
          setStudent(parsed);
          setDraftStudent(parsed);
          setStarted(Boolean(parsed.name));
        } catch {
          window.localStorage.removeItem("connect-plus-student");
        }
      }
      try {
        const savedProgress = window.localStorage.getItem("connect-plus-progress");
        const storedProgress = savedProgress ? JSON.parse(savedProgress) as Progress : {};
        const storedCheckpoint = window.localStorage.getItem("connect-plus-quiz-checkpoint");
        let parsedCheckpoint: QuizCheckpoint | null = null;
        try { parsedCheckpoint = storedCheckpoint ? JSON.parse(storedCheckpoint) : null; } catch { /* Keep saved lesson results if only the checkpoint is damaged. */ }
        const restored = restoreCheckpoint(storedProgress, parsedCheckpoint);
        setProgress(restored.progress);
        setCheckpoint(restored.checkpoint);
        window.localStorage.setItem("connect-plus-progress", JSON.stringify(restored.progress));
        if (restored.checkpoint) window.localStorage.setItem("connect-plus-quiz-checkpoint", JSON.stringify(restored.checkpoint));
        else window.localStorage.removeItem("connect-plus-quiz-checkpoint");
      } catch {
        // Leave the saved record intact so the portal can recover it from the cloud.
      }
    }, 0);
    return () => window.clearTimeout(hydrationTimer);
  }, []);

  const selectedUnit = useMemo(
    () => units.find((unit) => unit.id === selectedUnitId) ?? units[0],
    [selectedUnitId],
  );
  const selectedLesson = selectedUnit.lessons[selectedLessonIndex];
  const selectedLessonKey = getLessonKey(selectedUnit.id, selectedLessonIndex);
  const totalXp = Object.values(progress).reduce((sum, entry) => sum + entry.score, 0)
    + (checkpoint ? Math.max(0, checkpoint.score - (progress[checkpoint.quizId]?.score ?? 0)) : 0);
  const assessedXp = activeLessonXp(progress);
  const termProgress = Math.min(100, Math.round((assessedXp / 7500) * 100));
  const getUnitCompletion = (unitId: number) => Math.min(100, Math.round(
    (Array.from({ length: 5 }, (_, index) => progress[getLessonKey(unitId, index)]?.score ?? 0)
      .reduce((sum, score) => sum + score, 0) / 1500) * 100,
  ));
  const nextUnitId = units.find((unit) => getUnitCompletion(unit.id) < 100)?.id ?? 5;
  const unitXp = getUnitXp(progress, selectedUnit.id);
  const activeQuestions = useMemo(
    () => quizMode === "bank" ? generateUnitBank(selectedUnit.id) : generateLessonQuestions(selectedLessonKey),
    [quizMode, selectedLessonKey, selectedUnit.id],
  );

  function beginAdventure(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanStudent = {
      name: draftStudent.name.trim(),
      className: draftStudent.className.trim(),
      school: draftStudent.school.trim(),
    };
    if (!cleanStudent.name || !cleanStudent.className) return;
    setStudent(cleanStudent);
    setDraftStudent(cleanStudent);
    setStarted(true);
    window.localStorage.setItem("connect-plus-student", JSON.stringify(cleanStudent));
  }

  function openUnit(id: number) {
    if (!portalUnitOpen(id)) { window.alert('This unit is closed by Mrs. Mona Harb.'); return; }
    setSelectedUnitId(id);
    setView("unit");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openLesson(index: number) {
    setSelectedLessonIndex(index);
    setView("lesson");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startLessonQuiz() {
    if (selectedLesson?.project) return;
    setQuizMode("lesson"); const nextCheckpoint: QuizCheckpoint = { quizId: selectedLessonKey, unitId: selectedUnit.id, lessonIndex: selectedLessonIndex, mode: "lesson", questionIndex: 0, score: 0, curriculumVersion }; setCheckpoint(nextCheckpoint); window.localStorage.setItem("connect-plus-quiz-checkpoint", JSON.stringify(nextCheckpoint));
    setView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startUnitBank() {
    setQuizMode("bank"); const nextCheckpoint: QuizCheckpoint = { quizId: getBankKey(selectedUnit.id), unitId: selectedUnit.id, lessonIndex: selectedLessonIndex, mode: "bank", questionIndex: 0, score: 0, curriculumVersion }; setCheckpoint(nextCheckpoint); window.localStorage.setItem("connect-plus-quiz-checkpoint", JSON.stringify(nextCheckpoint));
    setView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openReader(id: string) {
    setSelectedSupplementaryId(id);
    setView("reader");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function saveResult(quizId: string, score: number, total: number) {
    setProgress((current) => {
      const previous = current[quizId];
      const next = { ...current, [quizId]: { score: Math.max(previous?.score ?? 0, score), total } };
      window.localStorage.setItem("connect-plus-progress", JSON.stringify(next)); window.localStorage.removeItem("connect-plus-quiz-checkpoint"); setCheckpoint(null);
      return next;
    });
  }

  function saveQuizProgress(questionIndex: number, score: number) { if (!checkpoint) return; const delta = Math.max(0, questionIndex - checkpoint.questionIndex); if (delta) window.localStorage.setItem('connect-plus-answer-count', String(Number(window.localStorage.getItem('connect-plus-answer-count') || 0) + delta)); const next = { ...checkpoint, questionIndex, score }; setCheckpoint(next); window.localStorage.setItem("connect-plus-quiz-checkpoint", JSON.stringify(next)); } function resumeLastQuestion() { if (!checkpoint) return; if (!portalUnitOpen(checkpoint.unitId)) { window.alert('This unit is closed by Mrs. Mona Harb.'); return; } setSelectedUnitId(checkpoint.unitId); setSelectedLessonIndex(checkpoint.lessonIndex); setQuizMode(checkpoint.mode); setView("quiz"); window.scrollTo({ top: 0, behavior: "smooth" }); } function goHome() {
    setView("home");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!started) return <main><p role="status">Loading your learning account from the portal…</p></main>;

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="logo-button" onClick={goHome} aria-label="Go to home">
          <span className="logo-mark">CP</span>
          <span><strong>Connect Plus 4</strong><small>English Adventure</small></span>
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <button className={view === "home" ? "active" : ""} onClick={goHome}>Home</button>
          <button onClick={() => openUnit(selectedUnitId)}>My Learning</button>
          <button onClick={() => { setView("about"); setMenuOpen(false); }}>Who Am I?</button>

        </nav>
        <div className="student-chip">
          <span className="student-avatar">{student.name.charAt(0).toUpperCase()}</span>
          <span><strong>{student.name.split(" ")[0]}</strong><small>{totalXp} XP · Level {Math.floor(totalXp / 500) + 1}</small></span>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
      </header>

      {view === "home" && (
        <main>
          <section className="dashboard-hero">
            <div className="dashboard-hero-image" aria-hidden="true" />
            <div className="dashboard-hero-overlay" />
            <div className="dashboard-hero-copy">
              <span className="eyebrow-chip">Term 1 · 2026–2027</span>
              <h1>Welcome back, <em>{student.name.split(" ")[0]}!</em></h1>
              <p>Every word you learn is another sparkle in your story. Ready for today’s adventure?</p>
              <button className="primary-button compact" onClick={() => openUnit(nextUnitId)}>Continue learning <span>→</span></button>{checkpoint && <button className="primary-button compact" onClick={resumeLastQuestion}>Continue Last Question <span>{checkpoint.questionIndex + 1} →</span></button>}
            </div>
            <div className="progress-glass">
              <span className="progress-star">★</span>
              <div><small>Term progress</small><strong>{termProgress ? `${termProgress}% complete` : "Let’s begin!"}</strong></div>
              <div className="mini-progress"><span style={{ width: `${Math.max(termProgress, 3)}%` }} /></div>
            </div>
          </section>

          <section className="dashboard-content">
            <div className="section-heading">
              <div><p className="kicker">Choose your next world</p><h2>Explore the units</h2></div>
              <div className="term-stats"><span><strong>5</strong> worlds</span><span><strong>1,000</strong> challenges</span></div>
            </div>
            <div className="unit-grid">
              {units.map((unit) => (
                <button
                  key={unit.id}
                  className={unit.cover ? "unit-card has-cover" : "unit-card"}
                  style={{
                    "--accent": unit.accent,
                    "--soft": unit.soft,
                    backgroundImage: unit.cover
                      ? `linear-gradient(90deg, rgba(55, 30, 71, .84), rgba(55, 30, 71, .48)), url(${unit.cover})`
                      : undefined,
                  } as React.CSSProperties}
                  onClick={() => openUnit(unit.id)}
                >
                  <span className="unit-number">Unit {unit.id}{portalUnitOpen(unit.id) ? '' : ' · Closed'}</span>
                  <span className="unit-icon" aria-hidden="true">{unit.icon}</span>
                  <span className="unit-card-copy">
                    <small>{unit.theme}</small>
                    <strong>{unit.title}</strong>
                    <em>{unit.eyebrow}</em>
                  </span>
                  <span className="card-progress"><i style={{ background: `linear-gradient(90deg, ${unit.accent} ${getUnitCompletion(unit.id)}%, rgba(255,255,255,.28) ${getUnitCompletion(unit.id)}%)` }} /><small>{getUnitCompletion(unit.id)}% complete</small></span>
                  <span className="round-arrow" aria-hidden="true">→</span>
                </button>
              ))}
            </div>

            <div className="extras-grid">
              <article className="extra-card has-art review-one-card" style={{ backgroundImage: "linear-gradient(90deg, rgba(46,27,65,.88), rgba(46,27,65,.25)), url(/assets/review-1-cover.webp)" }}>
                <span className="extra-label">Units 1–3 recap</span>
                <h3>Review 1</h3>
                <p>Connect the big ideas from your first three worlds.</p>
                <button onClick={() => openReader("review1")}>Open review →</button>
              </article>
              <article className="extra-card has-art coral-card" style={{ backgroundImage: "linear-gradient(90deg, rgba(20,45,74,.9), rgba(20,45,74,.2)), url(/assets/coral-reefs-cover.webp)" }}>
                <span className="extra-label">Non-fiction reader</span>
                <h3>Coral Reefs</h3>
                <p>Discover the colourful cities beneath the sea.</p>
                <button onClick={() => openReader("coral")}>Open reader →</button>
              </article>
              <article className="extra-card has-art story-card" style={{ backgroundImage: "linear-gradient(90deg, rgba(59,24,57,.9), rgba(59,24,57,.18)), url(/assets/khayameya-summer-cover.webp)" }}>
                <span className="extra-label">Fiction reader</span>
                <h3>Khayameya Summer</h3>
                <p>A warm story about creativity, family and tradition.</p>
                <button onClick={() => openReader("khayameya")}>Open story →</button>
              </article>
              <article className="extra-card has-art review-two-card" style={{ backgroundImage: "linear-gradient(90deg, rgba(77,28,55,.9), rgba(77,28,55,.2)), url(/assets/review-2-cover.webp)" }}>
                <span className="extra-label">Units 4–5 recap</span>
                <h3>Review 2</h3>
                <p>Bring together resources, technology and work.</p>
                <button onClick={() => openReader("review2")}>Open review →</button>
              </article>
              {['rain', 'caterpillar', 'presentation', 'term-project'].map(id => {
                const item = supplementaryContent[id];
                return <article className="extra-card curriculum-extra" style={{ background: item.soft, color: item.color }} key={id}>
                  <span className="extra-label">{item.subtitle}</span>
                  <h3>{item.title}</h3>
                  <p>{item.intro}</p>
                  <button onClick={() => openReader(id)}>Explore →</button>
                </article>;
              })}
            </div>
          </section>
        </main>
      )}

      {view === "unit" && (
        <main className="unit-page" style={{ "--accent": selectedUnit.accent, "--soft": selectedUnit.soft } as React.CSSProperties}>
          <section
            className="unit-banner has-cover"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(47, 27, 63, .92) 0%, rgba(47, 27, 63, .7) 46%, rgba(47, 27, 63, .2) 100%), url(${selectedUnit.cover})`,
            }}
          >
            <button className="back-button" onClick={goHome}>← All units</button>
            <div className="unit-banner-copy">
              <p>{selectedUnit.theme} · Unit {selectedUnit.id}</p>
              <h1>{selectedUnit.title}</h1>
              <span>{selectedUnit.eyebrow}</span>
            </div>
            <div className="unit-banner-badge"><span>{selectedUnit.icon}</span><small>Your next world</small></div>
          </section>

          <section className="lesson-section">
            <div className="lesson-heading">
              <div><p className="kicker">Six learning stops</p><h2>Your unit journey</h2></div>
              <div className="unit-score">{unitXp} <span>/ 2,000 XP</span></div>
            </div>
            <div className="lesson-list">
              {selectedUnit.lessons.map((lesson, index) => {
                const result = progress[getLessonKey(selectedUnit.id, index)];
                const earnedStars = result ? (result.score / result.total >= .9 ? 3 : result.score / result.total >= .7 ? 2 : 1) : 0;
                return <article className={lesson.project ? "lesson-row project-row" : "lesson-row"} key={lesson.title}>
                  <div className="lesson-index">{index + 1}</div>
                  <div className="lesson-copy">
                    <span>{lesson.project ? "Project · View only" : `Lesson ${index + 1}`}</span>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.subtitle}</p>
                  </div>
                  {!lesson.project && <div className="lesson-rewards"><span>{[0, 1, 2].map((star) => star < earnedStars ? "★" : "☆").join(" ")}</span><small>{result ? `${result.score} / ${result.total} XP` : "30 challenges"}</small></div>}
                  <button onClick={() => openLesson(index)}>{lesson.project ? "View project" : "Start lesson"} <span>→</span></button>
                </article>
              })}
            </div>
            <article className="question-bank-card">
              <div className="bank-icon">★</div>
              <div><span>Unit challenge</span><h3>50-Question Power Bank</h3><p>Mix vocabulary, grammar, reading and sentence skills from Lessons 1–5.</p></div>
              <button onClick={startUnitBank}>Start challenge →</button>
            </article>
          </section>
        </main>
      )}

      {view === "lesson" && (
        <LessonView
          unitNumber={selectedUnit.id}
          unitTitle={selectedUnit.title}
          lessonNumber={selectedLessonIndex + 1}
          accent={selectedUnit.accent}
          soft={selectedUnit.soft}
          cover={selectedUnit.cover}
          content={lessonContent[selectedLessonKey]}
          project={projectContent[selectedLessonKey]}
          onBack={() => setView("unit")}
          onPractice={startLessonQuiz}
        />
      )}

      {view === "quiz" && (
        <QuizPlayer
          quizId={quizMode === "bank" ? getBankKey(selectedUnit.id) : selectedLessonKey}
          title={quizMode === "bank" ? `${selectedUnit.title} · 50-Question Power Bank` : selectedLesson.title}
          questions={activeQuestions}
          accent={selectedUnit.accent}
          onExit={() => setView(quizMode === "bank" ? "unit" : "lesson")}
          initialIndex={checkpoint?.questionIndex ?? 0} initialScore={checkpoint?.score ?? 0} onProgress={saveQuizProgress} onComplete={saveResult}
        />
      )}

      {view === "reader" && (
        <ReaderView content={supplementaryContent[selectedSupplementaryId]} onBack={goHome} />
      )}

      {view === "about" && (
        <main className="about-page">
          <section className="about-hero">
            <button className="back-button light" onClick={goHome}>← Back home</button>
            <div className="about-badge">MH</div>
            <p className="kicker">Meet your English guide</p>
            <h1>Mrs. Mona Harb</h1>
            <p>Teaching English with experience, imagination and heart.</p>
          </section>
          <section className="about-card">
            <span className="quote-mark">“</span>
            <h2>Who Am I?</h2>
            <p>
              Mrs. Mona Harb holds a Bachelor’s degree from the Faculty of Al-Alsun,
              Ain Shams University. She studied Spanish as her first language and English
              as her second language.
            </p>
            <p>
              She has extensive experience in teaching English and is passionate about
              helping young learners develop their language skills with confidence and enjoyment.
            </p>
            <div className="about-values">
              <span><b>✦</b> Learn with joy</span>
              <span><b>♡</b> Grow with confidence</span>
              <span><b>★</b> Shine in English</span>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}
