import {
  Locale
}
from '../../../../src/locale';

import {
  UpperCaseAlphabetsStatsCalculator
}
from '../../../../src/services/char-stats/upper-case-alphabets-stats-calculator';

import {
  CharStats
}
from '../../../../src/services/char-stats/char-stats';

let charStatsCalculator;

beforeEach(() => {
  charStatsCalculator = new UpperCaseAlphabetsStatsCalculator();
});

describe('the UpperCaseAlphabetsStatsCalculator class', () => {
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
    let expectedStats = new CharStats(Locale.UpperCaseAlphabetStatsName, match,
      UpperCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with no matches', () => {
    let text = "a0()@mjd", match = 0;
    let expectedStats = new CharStats(Locale.UpperCaseAlphabetStatsName, match,
      UpperCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with 2 matches', () => {
    let text = "aC0()@mKjd", match = 2;
    let expectedStats = new CharStats(Locale.UpperCaseAlphabetStatsName, match,
      UpperCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with all matches', () => {
    let text = "ACMKJD", match = 6;
    let expectedStats = new CharStats(Locale.UpperCaseAlphabetStatsName, match,
      UpperCaseAlphabetsStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });
});
