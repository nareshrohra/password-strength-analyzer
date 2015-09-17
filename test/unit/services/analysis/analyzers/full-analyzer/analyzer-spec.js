import {
  Locale
}
from '../../../../../../src/locale';

import {
  CompositeAnalyzer, FullAnalyzer
}
from '../../../../../../src/services/analysis/analyzers/full-analyzer/analyzer';

import {
  MockAnalysisData
}
from '../../../../../mock-data/analysis-data';

let analyzer;

beforeEach(function() {
  analyzer = new FullAnalyzer();
});

describe('the FullAnalyzer class', () => {
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
    let expectedAnalysis = MockAnalysisData.SimplePassword.getFullAnalysisData(options);
    expect(analyzer.getAnalysis(password, options)).toEqual(expectedAnalysis);
  });
});
