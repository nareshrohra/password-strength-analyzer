import {
  Locale
}
from '../../../../../../src/locale';

import {
  BruteForceAnalysis
}
from '../../../../../../src/services/analysis/analyzers/brute-force/analysis';

let analysis;

beforeEach(function() {
  analysis = new BruteForceAnalysis();
});

describe('the BruteForceAnalysis class', () => {
  it('handles null parameter while setting charStats', () => {
    let charStats = null;
    expect(x => analysis.setCharStats(charStats)).toThrow(Locale.Error.InvalidArgCharStats);
  });

  it('handles undefined while setting charStats', () => {
    let charStats = {};
    expect(x => analysis.setCharStats(charStats.notDefined)).toThrow(Locale.Error.InvalidArgCharStats);
  });

  it('handles null parameter while setting depth', () => {
    let depth = null;
    expect(x => analysis.setSearchSpaceDepth(depth)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles undefined while setting depth', () => {
    let depth = {};
    expect(x => analysis.setSearchSpaceDepth(depth.notDefined)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles string value while setting depth', () => {
    let depth = "a";
    expect(x => analysis.setSearchSpaceDepth(depth)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles negative value while setting depth', () => {
    let depth = -1;
    expect(x => analysis.setSearchSpaceDepth(depth)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles null parameter while setting length', () => {
    let length = null;
    expect(x => analysis.setSearchSpaceLength(length)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles undefined while setting length', () => {
    let length = {};
    expect(x => analysis.setSearchSpaceLength(length.notDefined)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles string value while setting length', () => {
    let length = "a";
    expect(x => analysis.setSearchSpaceLength(length)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles negative value while setting length', () => {
    let length = -1;
    expect(x => analysis.setSearchSpaceLength(length)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles null parameter while setting size', () => {
    let size = null;
    expect(x => analysis.setSearchSpaceSize(size)).toThrow(Locale.Error.InvalidArgSize);
  });

  it('handles undefined while setting size', () => {
    let size = {};
    expect(x => analysis.setSearchSpaceSize(size.notDefined)).toThrow(Locale.Error.InvalidArgSize);
  });

  it('handles string value while setting size', () => {
    let size = "a";
    expect(x => analysis.setSearchSpaceSize(size)).toThrow(Locale.Error.InvalidArgSize);
  });

  it('handles negative value while setting size', () => {
    let size = -1;
    expect(x => analysis.setSearchSpaceSize(size)).toThrow(Locale.Error.InvalidArgSize);
  });

  it('handles null value for time while setting online attack crack time', () => {
    let time = null,
      attackSpeed = 100;
    expect(x => analysis.setOnlineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles undefined for time while setting online attack crack time', () => {
    let time = {},
      attackSpeed = 100;
    expect(x => analysis.setOnlineAttackCrackTime(time.notDefined, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles string value for time while setting online attack crack time', () => {
    let time = "a",
      attackSpeed = 100;
    expect(x => analysis.setOnlineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles negative value for time while setting online attack crack time', () => {
    let time = -1,
      attackSpeed = 100;
    expect(x => analysis.setOnlineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles null value for attackSpeed while setting online attack crack time', () => {
    let time = 10000,
      attackSpeed = null;
    expect(x => analysis.setOnlineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });

  it('handles undefined for attackSpeed while setting online attack crack time', () => {
    let time = 10000,
      attackSpeed = {};
    expect(x => analysis.setOnlineAttackCrackTime(time, attackSpeed.notDefined)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });

  it('handles string value for attackSpeed while setting online attack crack time', () => {
    let time = 10000,
      attackSpeed = "a";
    expect(x => analysis.setOnlineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });

  it('handles negative value for attackSpeed while setting online attack crack time', () => {
    let time = 10000,
      attackSpeed = -1;
    expect(x => analysis.setOnlineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });

  it('handles null value for time while setting offline attack crack time', () => {
    let time = null, attackSpeed = 100;
    expect(x => analysis.setOfflineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles undefined for time while setting offline attack crack time', () => {
    let time = {}, attackSpeed = 100;
    expect(x => analysis.setOfflineAttackCrackTime(time.notDefined, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles string value for time while setting offline attack crack time', () => {
    let time = "a", attackSpeed = 100;
    expect(x => analysis.setOfflineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles negative value for time while setting offline attack crack time', () => {
    let time = -1, attackSpeed = 100;
    expect(x => analysis.setOfflineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgTime);
  });

  it('handles null value for attackSpeed while setting offline attack crack time', () => {
    let time = 10000, attackSpeed = null;
    expect(x => analysis.setOfflineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });

  it('handles undefined for attackSpeed while setting offline attack crack time', () => {
    let time = 10000, attackSpeed = {};
    expect(x => analysis.setOfflineAttackCrackTime(time, attackSpeed.notDefined)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });

  it('handles string value for attackSpeed while setting offline attack crack time', () => {
    let time = 10000, attackSpeed = "a";
    expect(x => analysis.setOfflineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });

  it('handles negative value for attackSpeed while setting offline attack crack time', () => {
    let time = 10000, attackSpeed = -1;
    expect(x => analysis.setOfflineAttackCrackTime(time, attackSpeed)).toThrow(Locale.Error.InvalidArgAttackSpeed);
  });
  
  it('gets Name', () => {
    expect(analysis.getName()).toBe(Locale.BruteForceAnalysisName);
  });
});
