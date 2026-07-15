"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import LessonView from "./LessonView";
import QuizPlayer from "./QuizPlayer";
import ReaderView from "./ReaderView";
import { getLessonKey, lessonContent, projectContent } from "./curriculum";
import { generateLessonQuestions, generateUnitBank } from "./questions";
import { supplementaryContent } from "./supplementary";

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

type ProgressEntry = { score: number; total: number };
type Progress = Record<string, ProgressEntry>;

const units: Unit[] = [
  {
    id: 1,
    title: "What Can I Do?",
    theme: "I Discover Myself",
    eyebrow: "Body, senses & confidence",
    accent: "#f264a6",
    soft: "#fff0f7",
    icon: "✦",
    cover: "/assets/unit-1-cover.webp",
    lessons: [
      { title: "My Body", subtitle: "Body systems and healthy habits" },
      { title: "Our Senses", subtitle: "How we understand the world" },
      { title: "Language", subtitle: "Present simple and capital letters" },
      { title: "Parasports", subtitle: "Champions, ability and inclusion" },
      { title: "Writing Paragraphs", subtitle: "Titles and healthy lifestyles" },
      { title: "Summer Camp Project", subtitle: "Read, explore and create", project: true },
    ],
  },
  {
    id: 2,
    title: "Plants and Animals",
    theme: "I Discover Myself",
    eyebrow: "Nature, habitats & colour",
    accent: "#6d58d9",
    soft: "#f1efff",
    icon: "❀",
    cover: "/assets/unit-2-cover.webp",
    lessons: [
      { title: "Vertebrates", subtitle: "Five fascinating animal groups" },
      { title: "Language", subtitle: "Comparatives and superlatives" },
      { title: "Invertebrates", subtitle: "Animals without backbones" },
      { title: "CLIL: Art", subtitle: "Primary and secondary colours" },
      { title: "Linking Ideas", subtitle: "Clear and connected writing" },
      { title: "Micro-habitat Project", subtitle: "Read, explore and create", project: true },
    ],
  },
  {
    id: 3,
    title: "My World",
    theme: "I Discover Myself",
    eyebrow: "Community, history & music",
    accent: "#ef8b4c",
    soft: "#fff3e9",
    icon: "♫",
    cover: "/assets/unit-3-cover.webp",
    lessons: [
      { title: "My Community", subtitle: "People, places and citizenship" },
      { title: "The History of Egypt", subtitle: "A journey through ancient Egypt" },
      { title: "Governorates of Egypt", subtitle: "Explore Egypt on the map" },
      { title: "CLIL: Music", subtitle: "Traditional Egyptian sounds" },
      { title: "Writing", subtitle: "Folk dancing and description" },
      { title: "Tourist Guide Project", subtitle: "Read, explore and create", project: true },
    ],
  },
  {
    id: 4,
    title: "City and Country",
    theme: "Myself and Others",
    eyebrow: "Places, crafts & smart cities",
    accent: "#34a995",
    soft: "#eafffa",
    icon: "⌂",
    cover: "/assets/unit-4-cover.webp",
    lessons: [
      { title: "Rural and Urban Places", subtitle: "Life in cities and villages" },
      { title: "Language", subtitle: "Regular and irregular plurals" },
      { title: "A Carpet Workshop", subtitle: "Traditional Egyptian crafts" },
      { title: "CLIL: Math", subtitle: "Numbers in everyday life" },
      { title: "Writing", subtitle: "Describe your city" },
      { title: "Smart Growth Project", subtitle: "Read, explore and create", project: true },
    ],
  },
  {
    id: 5,
    title: "Resources in Our World",
    theme: "Myself and Others",
    eyebrow: "Energy, teamwork & our planet",
    accent: "#e8aa2e",
    soft: "#fff8df",
    icon: "☀",
    cover: "/assets/unit-5-cover.webp",
    lessons: [
      { title: "Natural Resources", subtitle: "Renewable and non-renewable" },
      { title: "Language", subtitle: "Fossil fuels and climate" },
      { title: "Renewable Energy", subtitle: "Solar, wind, wave and tidal power" },
      { title: "Pronouns", subtitle: "Clear and accurate sentences" },
      { title: "Teamwork", subtitle: "How to be a great team member" },
      { title: "Eco-vehicle Project", subtitle: "Read, explore and create", project: true },
    ],
  },
  {
    id: 6,
    title: "Let’s Work",
    theme: "Myself and Others",
    eyebrow: "Transport, technology & careers",
    accent: "#438ad9",
    soft: "#eaf5ff",
    icon: "⚡",
    cover: "/assets/unit-6-cover.webp",
    lessons: [
      { title: "Transportation", subtitle: "Travel by air, rail, road and water" },
      { title: "Language", subtitle: "Future predictions with will" },
      { title: "Tech Jobs", subtitle: "Exciting careers of the future" },
      { title: "Passwords & Passphrases", subtitle: "Be safe and smart online" },
      { title: "A Fun Job", subtitle: "Ships, captains and the Suez Canal" },
      { title: "Young Entrepreneurs", subtitle: "Read, explore and create", project: true },
    ],
  },
];

const emptyStudent: Student = { name: "", className: "", school: "" };

export default function Home() {
  const [student, setStudent] = useState<Student>(emptyStudent);
  const [draftStudent, setDraftStudent] = useState<Student>(emptyStudent);
  const [started, setStarted] = useState(false);
  const [view, setView] = useState<"home" | "unit" | "lesson" | "quiz" | "reader" | "about">("home");
  const [selectedUnitId, setSelectedUnitId] = useState(1);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [quizMode, setQuizMode] = useState<"lesson" | "bank">("lesson");
  const [selectedSupplementaryId, setSelectedSupplementaryId] = useState("coral");
  const [progress, setProgress] = useState<Progress>({});
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
        if (savedProgress) setProgress(JSON.parse(savedProgress) as Progress);
      } catch {
        window.localStorage.removeItem("connect-plus-progress");
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
  const totalXp = Object.values(progress).reduce((sum, entry) => sum + entry.score, 0);
  const assessedXp = Object.entries(progress).reduce(
    (sum, [key, entry]) => /^u[1-6]l[1-5]$/.test(key) ? sum + entry.score : sum,
    0,
  );
  const termProgress = Math.round((assessedXp / 9000) * 100);
  const getUnitCompletion = (unitId: number) => Math.round(
    (Array.from({ length: 5 }, (_, index) => progress[`u${unitId}l${index + 1}`]?.score ?? 0)
      .reduce((sum, score) => sum + score, 0) / 1500) * 100,
  );
  const nextUnitId = units.find((unit) => getUnitCompletion(unit.id) < 100)?.id ?? 6;
  const unitXp = Object.entries(progress).reduce(
    (sum, [key, entry]) => key.startsWith(`u${selectedUnit.id}`) ? sum + entry.score : sum,
    0,
  );
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
    setQuizMode("lesson");
    setView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startUnitBank() {
    setQuizMode("bank");
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
      window.localStorage.setItem("connect-plus-progress", JSON.stringify(next));
      return next;
    });
  }

  function goHome() {
    setView("home");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!started) {
    return (
      <main className="welcome-shell">
        <div className="welcome-image" aria-hidden="true" />
        <div className="welcome-vignette" aria-hidden="true" />
        <div className="floating-sparkles" aria-hidden="true">
          <span>✦</span><span>✧</span><span>✦</span><span>✧</span>
        </div>
        <section className="welcome-content" aria-label="Student welcome">
          <div className="brand-pill"><span>CP</span> Connect Plus 4</div>
          <div className="welcome-main">
            <div className="welcome-copy">
              <p className="kicker">A magical English adventure</p>
              <h1>Learn. Play.<br /><em>Shine.</em></h1>
              <p className="welcome-lead">
                Believe in your voice, enjoy every challenge and let your English sparkle brighter every day.
              </p>
            </div>

            <form className="student-card" onSubmit={beginAdventure}>
              <div className="card-heading">
                <div className="avatar-orbit" aria-hidden="true">★</div>
                <div>
                  <p>Welcome, superstar!</p>
                  <h2>Tell us about you</h2>
                </div>
              </div>
              <label>
                Your name
                <input
                  required
                  value={draftStudent.name}
                  onChange={(event) => setDraftStudent({ ...draftStudent, name: event.target.value })}
                  placeholder="e.g. Farida Ahmed"
                  autoComplete="name"
                />
              </label>
              <div className="form-row">
                <label>
                  Class
                  <input
                    required
                    value={draftStudent.className}
                    onChange={(event) => setDraftStudent({ ...draftStudent, className: event.target.value })}
                    placeholder="e.g. 4A"
                  />
                </label>
                <label>
                  School
                  <input
                    value={draftStudent.school}
                    onChange={(event) => setDraftStudent({ ...draftStudent, school: event.target.value })}
                    placeholder="Optional"
                  />
                </label>
              </div>
              <button className="primary-button" type="submit">
                Start my adventure <span aria-hidden="true">→</span>
              </button>
              <p className="privacy-note">Your details stay safely on this device.</p>
            </form>
          </div>

          <p className="teacher-credit">Created with care by <strong>Mrs. Mona Harb</strong></p>
        </section>
      </main>
    );
  }

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
          <button onClick={() => { setDraftStudent(student); setStarted(false); setMenuOpen(false); }}>Edit Profile</button>
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
              <span className="eyebrow-chip">Your learning journey</span>
              <h1>Welcome back, <em>{student.name.split(" ")[0]}!</em></h1>
              <p>Every word you learn is another sparkle in your story. Ready for today’s adventure?</p>
              <button className="primary-button compact" onClick={() => openUnit(nextUnitId)}>Continue learning <span>→</span></button>
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
              <div className="term-stats"><span><strong>6</strong> worlds</span><span><strong>1,200</strong> challenges</span></div>
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
                  <span className="unit-number">Unit {unit.id}</span>
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
                <span className="extra-label">Units 4–6 recap</span>
                <h3>Review 2</h3>
                <p>Bring together places, resources, technology and work.</p>
                <button onClick={() => openReader("review2")}>Open review →</button>
              </article>
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
          quizId={quizMode === "bank" ? `u${selectedUnit.id}-bank` : selectedLessonKey}
          title={quizMode === "bank" ? `${selectedUnit.title} · 50-Question Power Bank` : selectedLesson.title}
          questions={activeQuestions}
          accent={selectedUnit.accent}
          onExit={() => setView(quizMode === "bank" ? "unit" : "lesson")}
          onComplete={saveResult}
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
