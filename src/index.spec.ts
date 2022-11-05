import { MatchResult } from "."

describe('index test', () => {
  it('should return A for away win', () => {
    expect(MatchResult.AwayWin).toEqual('A')
  })
})