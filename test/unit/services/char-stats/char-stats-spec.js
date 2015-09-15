import {
  Locale
}
from '../../../../src/locale';

import {
  CharStats
}
from '../../../../src/services/char-stats/char-stats';

describe('the CharStats class', () => {
  it('handles null value for name parameter', () => {
    let name = null, matchCount = 1, charDepth = 10;
    expect(x => new CharStats(name, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles undefined value for name parameter', () => {
    let name = {}, matchCount = 1, charDepth = 10;
    expect(x => new CharStats(name.notDefined, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles null value for matchCount parameter', () => {
    let name = 'lower-case', matchCount = null, charDepth = 10;
    expect(x => new CharStats(name, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgMatchCount);
  });

  it('handles undefined value for matchCount parameter', () => {
    let name = 'lower-case', matchCount = {}, charDepth = 10;
    expect(x => new CharStats(name, matchCount.notDefined, charDepth)).toThrow(Locale.Error.InvalidArgMatchCount);
  });

  it('handles string value for matchCount parameter', () => {
    let name = 'lower-case', matchCount = "a", charDepth = 10;
    expect(x => new CharStats(name, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgMatchCount);
  });

  it('handles negative value for matchCount parameter', () => {
    let name = 'lower-case', matchCount = -1, charDepth = 10;
    expect(x => new CharStats(name, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgMatchCount);
  });

  it('handles null value for charDepth parameter', () => {
    let name = 'lower-case', matchCount = 1, charDepth = null;
    expect(x => new CharStats(name, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgCharDepth);
  });

  it('handles undefined value for charDepth parameter', () => {
    let name = 'lower-case', matchCount = 1, charDepth = {};
    expect(x => new CharStats(name, matchCount, charDepth.notDefined)).toThrow(Locale.Error.InvalidArgCharDepth);
  });

  it('handles string value for charDepth parameter', () => {
    let name = 'lower-case', matchCount = 1, charDepth = "a";
    expect(x => new CharStats(name, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgCharDepth);
  });

  it('handles negative value for charDepth parameter', () => {
    let name = 'lower-case', matchCount = 1, charDepth = -1;
    expect(x => new CharStats(name, matchCount, charDepth)).toThrow(Locale.Error.InvalidArgCharDepth);
  });

  it('gets/sets name', () => {
    let name = 'lower-case', matchCount = 1, charDepth = 10;
    let charStats = new CharStats(name, matchCount, charDepth);
    expect(charStats.getName()).toBe(name);
  });

  it('gets/sets matchCount', () => {
    let name = 'lower-case', matchCount = 1, charDepth = 10;
    let charStats = new CharStats(name, matchCount, charDepth);
    expect(charStats.getMatchCount()).toBe(matchCount);
  });

  it('gets/sets charDepth', () => {
    let name = 'lower-case', matchCount = 1, charDepth = 10;
    let charStats = new CharStats(name, matchCount, charDepth);
    expect(charStats.getCharDepth()).toBe(charDepth);
  });
});
