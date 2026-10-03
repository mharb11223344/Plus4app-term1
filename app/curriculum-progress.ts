import { getBankKey, getLessonKey, lessonKeys } from './curriculum';

export type ProgressEntry = { score: number; total: number };
export type Progress = Record<string, ProgressEntry>;
export type QuizCheckpoint = {
  quizId: string; unitId: number; lessonIndex: number;
  mode: 'lesson' | 'bank'; questionIndex: number; score: number;
  curriculumVersion?: string;
};
export const curriculumVersion = '2026-2027';

// Supabase controls retain their existing identity when textbook units move.
export const controlUnitId = (unitId: number) => unitId === 4 ? 5 : unitId === 5 ? 6 : unitId;

export function restoreCheckpoint(progress: Progress, checkpoint: QuizCheckpoint | null) {
  if (!checkpoint) return { progress, checkpoint: null };
  const unitId = checkpoint.mode === 'bank'
    ? [1, 2, 3, 4, 5].find(id => getBankKey(id) === checkpoint.quizId)
    : lessonKeys.findIndex(unit => unit.slice(0, 5).includes(checkpoint.quizId)) + 1;
  const lessonIndex = checkpoint.mode === 'bank' ? 0 : (unitId ? lessonKeys[unitId - 1].indexOf(checkpoint.quizId) : -1);
  const limit = checkpoint.mode === 'bank' ? 50 : 30;
  if (unitId && lessonIndex >= 0 && Number.isInteger(checkpoint.questionIndex) && checkpoint.questionIndex >= 0 && checkpoint.questionIndex < limit) {
    return { progress, checkpoint: { ...checkpoint, unitId, lessonIndex, curriculumVersion } };
  }
  // Retire changed/removed quizzes without awarding their completion to new lessons.
  // Preserve only the checkpoint XP not already included in its best saved result.
  const bonus = Math.max(0, (checkpoint.score || 0) - (progress[checkpoint.quizId]?.score || 0));
  const next = { ...progress };
  if (bonus) {
    const key = `archived-checkpoint:${checkpoint.quizId}`;
    next[key] = { score: Math.max(next[key]?.score || 0, bonus), total: 0 };
  }
  return { progress: next, checkpoint: null };
}

export function activeLessonXp(progress: Progress) {
  return lessonKeys.reduce((sum, unit) => sum + unit.slice(0, 5).reduce((value, key) => value + (progress[key]?.score || 0), 0), 0);
}

export function unitXp(progress: Progress, unitId: number) {
  return Array.from({ length: 5 }, (_, index) => getLessonKey(unitId, index))
    .reduce((sum, key) => sum + (progress[key]?.score || 0), progress[getBankKey(unitId)]?.score || 0);
}
