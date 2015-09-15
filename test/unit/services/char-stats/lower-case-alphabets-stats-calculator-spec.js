import {
  Locale
}
from '../../../../src/locale';

import {
  LowerCaseAlphabetsStatsCalculator
}
from '../../../../src/services/char-stats/lower-case-alphabets-stats-calculator';

import {
  CharStats
}
from '../../../../src/services/char-stats/char-stats';

let charStatsCalculator;

beforeEach(() => {
  charStatsCalculator = new LowerCaseAlphabetsStatsCalculator();
});

describe('the LowerCaseAlphabetsStatsCalculator class', () => {
  it('handles null value for text parameter', () => {
    let text = null;
    expect(x => charStatsCalculator.getStats(text)).toThrow(Locale.Error.InvalidArgText);
  });

  it('handles undefined value for text parameter', () => {
    let text = {};
    expect(x => charStatsCalculator.getStats(text.notDefined)).toThrow(Locale.Error.InvalidArgText);
  });

  it('gets stats with no matches for empty string', () => {
    let text = "", match = 0;
    let expectedStats = new CharStats(Locale.LowerCaseAlphabetStatsName, match,
      LowerCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with no matches', () => {
    let text = "A0()@MJD", match = 0;
    let expectedStats = new CharStats(Locale.LowerCaseAlphabetStatsName, match,
      LowerCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with 2 matches', () => {
    let text = "Ac0()@MkJD", match = 2;
    let expectedStats = new CharStats(Locale.LowerCaseAlphabetStatsName, match,
      LowerCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with all matches', () => {
    let text = "acmkjd", match = 6;
    let expectedStats = new CharStats(Locale.LowerCaseAlphabetStatsName, match,
      LowerCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });
});
