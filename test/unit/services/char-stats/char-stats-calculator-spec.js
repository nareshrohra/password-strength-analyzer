import {
  Locale
}
from '../../../../src/locale';

import {
  CharStats
}
from '../../../../src/services/char-stats/char-stats';

import {
  AggregateCharStats
}
from '../../../../src/services/char-stats/aggregate-char-stats';

import {
  CharStatsCalculator
}
from '../../../../src/services/char-stats/char-stats-calculator';

let charStatsCalculator;

beforeEach(() => {
  charStatsCalculator = new CharStatsCalculator();
});

describe('the CharStatsCalculator class', () => {
  it('handles null value for text parameter', () => {
    let text = null;
    expect(x => charStatsCalculator.getStats(text)).toThrow(Locale.Error.InvalidArgText);
  });

  it('handles undefined value for text parameter', () => {
    let text = {};
    expect(x => charStatsCalculator.getStats(text.notDefined)).toThrow(Locale.Error.InvalidArgText);
  });

  it('gets correct aggregate charDepth', () => {
    let text = "Abds@309A";
    let allStats = charStatsCalculator.getStats(text);
    expect(allStats.getCharDepth()).toBe(95);
  });
});
