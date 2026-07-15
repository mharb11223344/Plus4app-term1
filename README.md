# Connect Plus 4 · English Adventure

An interactive English learning app for Egyptian Primary 4 students, created for Mrs. Mona Harb's learners. The experience is fully in English and uses a playful, girl-friendly visual style.

## What is included

- Six complete Term 1 units and 36 lesson pages.
- Lessons 1–5 in every unit include vocabulary, language notes, an original reading summary, key ideas and smart notes.
- Lesson 6 in every unit is a view-only project page with no exercises, score or stars.
- Exactly 30 interactive questions for each assessed lesson.
- Exactly 50 questions in each unit Power Bank.
- 1,200 questions in total: 900 lesson questions and 300 unit-bank questions.
- Multiple choice, true/false, matching and sentence-ordering activities.
- XP, stars, levels, progress saving and best-score saving.
- Review 1, Review 2, Coral Reefs and Khayameya Summer reading hubs.
- Browser text-to-speech buttons for vocabulary and reading summaries.
- Responsive desktop, tablet and mobile layouts.
- Student details and learning progress are stored only in the browser's local storage.

The separate Term 1 project, Future Jobs, is intentionally not included.

## Run locally

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify the project

```bash
pnpm test
pnpm build
```

## Main files

- `app/page.tsx` — navigation, student profile and learning dashboard.
- `app/curriculum.ts` — lesson-by-lesson teaching content.
- `app/questions.ts` — deterministic 30-question and 50-question generators.
- `app/LessonView.tsx` — assessed lesson and view-only project layouts.
- `app/QuizPlayer.tsx` — the four interactive question modes and rewards.
- `app/supplementary.ts` — reviews and reader summaries.
- `public/assets/` — original app and unit cover artwork.

## Teacher

Mrs. Mona Harb holds a Bachelor's degree from the Faculty of Al-Alsun, Ain Shams University. She studied Spanish as her first language and English as her second language. She has extensive experience in teaching English and is passionate about helping young learners develop their language skills with confidence and enjoyment.

## Content note

The app follows the topics and learning sequence of Connect Plus 4, Term 1. Explanations, summaries, activities and questions are newly written for this app; no textbook page scans are embedded.

