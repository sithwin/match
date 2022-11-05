import { MatchResult } from "./matchresult";

describe("index test", () => {
  describe("test - match result", () => {
    it("should return A for away win", () => {
      expect(MatchResult.AwayWin).toEqual("A");
    });

    it("should return A for away win", () => {
      expect(MatchResult.Draw).toEqual("D");
    });

    it("should return A for away win", () => {
      expect(MatchResult.HomeWin).toEqual("H");
    });
  });
});
