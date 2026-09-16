/** The escalating audio clues used in every round. */
export const CLIP_STEPS_MS = [100, 500, 2_000, 5_000] as const;

export const DEFAULT_CLIP_STEP = 0;

export function clipLabel(durationMs: number): string {
  return `${durationMs / 1000}s`;
}

export function nextClipStep(step: number): number | null {
  const next = step + 1;
  return next < CLIP_STEPS_MS.length ? next : null;
}
