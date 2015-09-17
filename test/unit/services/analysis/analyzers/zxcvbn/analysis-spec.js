import {
  Locale
}
from '../../../../../../src/locale';

import {
  ZxcvbnAnalysis
}
from '../../../../../../src/services/analysis/analyzers/zxcvbn/analysis';

let analysis;

beforeEach(function() {
  analysis = new ZxcvbnAnalysis();
});

describe('the ZxcvbnAnalysis class', () => {
  it('handles null parameter while setting entropy', () => {
    let entropy = null;
    expect(x => analysis.setEntropy(entropy)).toThrow(Locale.Error.InvalidArgEntropy);
  });

  it('handles undefined while setting entropy', () => {
    let entropy = {};
    expect(x => analysis.setEntropy(entropy.notDefined)).toThrow(Locale.Error.InvalidArgEntropy);
  });

  it('handles string value while setting entropy', () => {
    let entropy = "a";
    expect(x => analysis.setEntropy(entropy)).toThrow(Locale.Error.InvalidArgEntropy);
  });

  it('handles negative value while setting entropy', () => {
    let entropy = -1;
    expect(x => analysis.setEntropy(entropy)).toThrow(Locale.Error.InvalidArgEntropy);
  });

  it('handles null parameter while setting score', () => {
    let score = null;
    expect(x => analysis.setScore(score)).toThrow(Locale.Error.InvalidArgScore);
  });

  it('handles undefined parameter while setting score', () => {
    let score = {};
    expect(x => analysis.setScore(score.notDefined)).toThrow(Locale.Error.InvalidArgScore);
  });

  it('handles string value while setting score', () => {
    let score = "a";
    expect(x => analysis.setScore(score)).toThrow(Locale.Error.InvalidArgScore);
  });

  it('handles negative value while setting score', () => {
    let score = -1;
    expect(x => analysis.setScore(score)).toThrow(Locale.Error.InvalidArgScore);
  });

  it('gets Name', () => {
    expect(analysis.getName()).toBe(Locale.ZxcvbnAnalysisName);
  });
});
