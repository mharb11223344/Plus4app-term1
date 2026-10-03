# Connect Plus 4 · English Adventure

Updated to the supplied 2026–2027 Term 1 Student’s Book for Mrs. Mona Harb’s Primary 4 students.

## Content

- Five units: What Can I Do?, Plants and Animals, My World, Resources in Our World, and Let’s Work.
- 25 assessed lessons and five view-only projects.
- 30 questions per assessed lesson and 50 per unit bank: 1,000 challenges.
- Vocabulary, grammar, adapted readings, page references, summaries and speech buttons.
- Alice, Learning from the Jungle, The Kind Prince and the Bird, and Journey to a New Earth.
- Review 1, Coral Reefs, Review 2 and Khayameya Summer.
- Rain, The Caterpillar, the weaving presentation and the Term 1 research project.

The supplied PDF’s contents page retains the old six-unit list. This app follows the five units in its actual lesson pages.

## Accounts and cloud progress

Open through [Mona Learning Hub](https://mharb11223344.github.io/mona-learning-hub/). The portal supplies the signed-in identity and synchronizes the existing progress keys with Supabase. No second student-name form appears.

Moved lessons keep their persisted IDs, scores and checkpoints. Replaced stories have new IDs. Removed lesson achievements stay in total XP but do not mark new lessons complete. Changed unit banks have versioned IDs.

`app/curriculum-progress.ts` restores checkpoints by quiz ID and recalculates displayed unit and lesson numbers. Existing teacher controls keep their identities: Resources uses stored control 5 and Work uses stored control 6, displayed as units 4 and 5. The companion portal update labels them correctly.

## Build and verify

```sh
node --test tests/*.test.mjs
node node_modules/typescript/bin/tsc --project tsconfig.curriculum.json --noEmit
node node_modules/vite/bin/vite.js build --config static.vite.config.ts
```

Publish generated JavaScript and CSS from `dist-static/assets/` into `assets/`, then update root `index.html`. Keep its portal redirect and cloud bridge. Root `index.html` is the GitHub Pages entry.

Explanations, adapted readings and questions are written for this app. Textbook scans are not embedded. Poetry extracts come from the supplied book. Keep local synthetic QA fixtures out of the published files.
