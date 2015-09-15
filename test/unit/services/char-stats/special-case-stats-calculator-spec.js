import {
  Locale
}
from '../../../../src/locale';

import {
  SpecialCaseStatsCalculator
}
from '../../../../src/services/char-stats/special-case-stats-calculator';

import {
  CharStats
}
from '../../../../src/services/char-stats/char-stats';

let charStatsCalculator;

beforeEach(() => {
  charStatsCalculator = new SpecialCaseStatsCalculator();
});

describe('the SpecialCaseStatsCalculator class', () => {
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
    let expectedStats = new CharStats(Locale.SpecialCaseStatsName, match,
      SpecialCaseStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with no matches', () => {
    let text = "A02dasdMJD", match = 0;
    let expectedStats = new CharStats(Locale.SpecialCaseStatsName, match,
      SpecialCaseStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with 2 matches', () => {
    let text = "Ac0()@MkJD", match = 3;
    let expectedStats = new CharStats(Locale.SpecialCaseStatsName, match,
      SpecialCaseStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });

  it('gets stats with all matches', () => {
    let text = "!#@<>\":\"", match = 8;
    let expectedStats = new CharStats(Locale.SpecialCaseStatsName, match,
      SpecialCaseStatsCalculator.CharDepth)
    expect(charStatsCalculator.getStats(text)).toEqual(expectedStats);
  });
});
