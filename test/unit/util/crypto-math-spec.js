import {
  Locale
}
from '../../../src/locale';

import {
  CryptoMath
}
from '../../../src/services/util/crypto-math';

describe('the CryptoMath class', () => {
  it('handles null for depth when calculating search space size', () => {
    let depth = null, length = 5;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles undefined for depth when calculating search space size', () => {
    let depth = {}, length = 5;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth.notDefined, length)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles string for depth when calculating search space size', () => {
    let depth = "a", length = 5;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles negative value for depth when calculating search space size', () => {
    let depth = -1, length = 5;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles 0 value for depth when calculating search space size', () => {
    let depth = 0, length = 5;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgDepth);
  });

  it('handles null for length when calculating search space size', () => {
    let depth = 52, length = null;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles undefined for length when calculating search space size', () => {
    let depth = 52, length = {};
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length.notDefined)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles string for length when calculating search space size', () => {
    let depth = 52, length = "a";
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles negative value for length when calculating search space size', () => {
    let depth = 52, length = -1;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('handles 0 value for length when calculating search space size', () => {
    let depth = 52, length = 0;
    expect(x => CryptoMath.caculateSearchSpaceSize(depth, length)).toThrow(Locale.Error.InvalidArgLength);
  });

  it('calculates search space size for length and depth as unity', () => {
    let depth = 1, length = 1;
    expect(CryptoMath.caculateSearchSpaceSize(depth, length)).toBe(1);
  });

  it('calculates search space size for depth as unity', () => {
    let depth = 1, length = 5;
    expect(CryptoMath.caculateSearchSpaceSize(depth, length)).toBe(5);
  });

  it('calculates search space size for length as unity', () => {
    let depth = 52, length = 1;
    expect(CryptoMath.caculateSearchSpaceSize(depth, length)).toBe(52);
  });

  it('calculates search space size', () => {
    let depth = 52, length = 4;
    expect(CryptoMath.caculateSearchSpaceSize(depth, length)).toBe(7454980);
  });
});
