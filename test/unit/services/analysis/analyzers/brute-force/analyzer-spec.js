import {
  Locale
}
from '../../../../../../src/locale';

import {
  BruteForceAnalyzer
}
from '../../../../../../src/services/analysis/analyzers/brute-force/analyzer';

import {
  BruteForceAnalysis
}
from '../../../../../../src/services/analysis/analyzers/brute-force/analysis';

import {
  MockAnalysisData
}
from '../../../../../mock-data/analysis-data';

let analyzer;

beforeEach(function() {
  analyzer = new BruteForceAnalyzer();
});

describe('the BruteForceAnalyzer class', () => {
  it('handles null password for getAnalysis', () => {
    let password = null,
      options = MockAnalysisData.getDefaultOptions();
    expect(x => analyzer.getAnalysis(password, options)).toThrow(Locale.Error.InvalidArgPassword);
  });

  it('handles undefined password for getAnalysis', () => {
    let password = {},
      options = MockAnalysisData.getDefaultOptions();
    expect(x => analyzer.getAnalysis(password.notDefined, options)).toThrow(Locale.Error.InvalidArgPassword);
  });

  it('handles null options for getAnalysis', () => {
    let password = MockAnalysisData.SimplePassword.Password,
      options = null;
    expect(x => analyzer.getAnalysis(password, options)).toThrow(Locale.Error.InvalidArgOptions);
  });

  it('handles undefined options for getAnalysis', () => {
    let password = MockAnalysisData.SimplePassword.Password,
      options = {};
    expect(x => analyzer.getAnalysis(password, options.notDefined)).toThrow(Locale.Error.InvalidArgOptions);
  });

  it('gets analysis', () => {
    let password = MockAnalysisData.SimplePassword.Password,
      options = MockAnalysisData.getDefaultOptions();
    let expectedAnalysis = MockAnalysisData.SimplePassword.getBruteForceAnalysisData(options);
    expect(analyzer.getAnalysis(password, options)).toEqual(expectedAnalysis);
  });
});
