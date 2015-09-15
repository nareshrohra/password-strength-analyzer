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

describe('the AggregateCharStats class', () => {
  it('handles null value for name parameter', () => {
    let name = null;
    expect(x => new AggregateCharStats(name)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles undefined value for name parameter', () => {
    let name = {};
    expect(x => new AggregateCharStats(name.notDefined)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles null parameter for adding stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let charStats = null;
    expect(x => aggregateStats.addStats(charStats)).toThrow(Locale.Error.InvalidArgCharStats);
  });

  it('handles undefined parameter for adding stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let charStats = {};
    expect(x => aggregateStats.addStats(charStats.notDefined)).toThrow(Locale.Error.InvalidArgCharStats);
  });

  it('sets aggregate matchCount to zero on construction', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    expect(aggregateStats.getMatchCount()).toBe(0);
  });

  it('sets aggregate charDepth to zero on construction', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    expect(aggregateStats.getCharDepth()).toBe(0);
  });

  it('adds/gets a stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let charStats = new CharStats('lower-case', 5, 26);
    aggregateStats.addStats(charStats);
    expect(aggregateStats.getAllStats()).toEqual([charStats]);
  });

  it('sets aggredate matchCount for single stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let charStats = new CharStats('lower-case', 5, 26);
    aggregateStats.addStats(charStats);
    expect(aggregateStats.getMatchCount()).toEqual(charStats.getMatchCount());
  });

  it('sets aggredate charDepth for single stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let charStats = new CharStats('lower-case', 5, 26);
    aggregateStats.addStats(charStats);
    expect(aggregateStats.getCharDepth()).toEqual(charStats.getCharDepth());
  });

  it('sets aggredate matchCount for multiple stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let lowerCaseCharStats = new CharStats('lower-case', 5, 26);
    aggregateStats.addStats(lowerCaseCharStats);
    let upperCaseCharStats = new CharStats('upper-case', 10, 26);
    aggregateStats.addStats(upperCaseCharStats);
    expect(aggregateStats.getMatchCount()).toEqual(15);
  });

  it('sets aggredate charDepth for multiple stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let lowerCaseCharStats = new CharStats('lower-case', 5, 26);
    aggregateStats.addStats(lowerCaseCharStats);
    let upperCaseCharStats = new CharStats('upper-case', 10, 26);
    aggregateStats.addStats(upperCaseCharStats);
    expect(aggregateStats.getCharDepth()).toEqual(52);
  });

  it('adds/gets multiple stats', () => {
    let aggregateStats = new AggregateCharStats('aggregate');
    let lowerCaseCharStats = new CharStats('lower-case', 5, 26);
    aggregateStats.addStats(lowerCaseCharStats);
    let upperCaseCharStats = new CharStats('upper-case', 10, 26);
    aggregateStats.addStats(upperCaseCharStats);
    expect(aggregateStats.getAllStats()).toEqual([lowerCaseCharStats, upperCaseCharStats]);
  });
});
