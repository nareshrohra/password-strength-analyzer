import {
  Locale
}
from '../../../../src/locale';

import {
  NumbersStatsCalculator
}
from '../../../../src/services/char-stats/numbers-stats-calculator';

import {
  CharStats
}
from '../../../../src/services/char-stats/char-stats';

let charStatsCalculator;

beforeEach(() => {
  charStatsCalculator = new NumbersStatsCalculator();
});

describe('the NumbersStatsCalculator class', () => {
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
    let expectedStats = new CharStats(Locale.NumbersStatsName, match,
      NumbersStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with no matches', () => {
    let text = "A!@dasdMJD", match = 0;
    let expectedStats = new CharStats(Locale.NumbersStatsName, match,
      NumbersStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with 2 matches', () => {
    let text = "Ac93Mk63#@JD", match = 4;
    let expectedStats = new CharStats(Locale.NumbersStatsName, match,
      NumbersStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with all matches', () => {
    let text = "299731", match = 6;
    let expectedStats = new CharStats(Locale.NumbersStatsName, match,
      NumbersStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });
});
