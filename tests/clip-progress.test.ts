import { describe, expect, it } from "vitest";
import { CLIP_STEPS_MS, clipLabel, nextClipStep } from "@/lib/clip-progress";

describe("progressive clip clues", () => {
  it("uses the requested escalating durations", () => {
    expect(CLIP_STEPS_MS).toEqual([100, 500, 2_000, 5_000]);
    expect(CLIP_STEPS_MS.map(clipLabel)).toEqual(["0.1s", "0.5s", "2s", "5s"]);
  });

  it("only advances through the available clues", () => {
    expect(nextClipStep(0)).toBe(1);
    expect(nextClipStep(1)).toBe(2);
    expect(nextClipStep(2)).toBe(3);
    expect(nextClipStep(3)).toBeNull();
  });
});
