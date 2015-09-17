import {
  Locale
}
from '../../../../../../src/locale';

import {
  ZxcvbnAnalyzer
}
from '../../../../../../src/services/analysis/analyzers/zxcvbn/analyzer';

import {
  ZxcvbnAnalysis
}
from '../../../../../../src/services/analysis/analyzers/zxcvbn/analysis';

import {
  MockAnalysisData
}
from '../../../../../mock-data/analysis-data';

let analyzer;

beforeEach(function() {
  analyzer = new ZxcvbnAnalyzer();
});

describe('the ZxcvbnAnalyzer class', () => {
  it('handles null password for getAnalysis', () => {
    let password = null;
    expect(x => analyzer.getAnalysis(password, {})).toThrow(Locale.Error.InvalidArgPassword);
  });

  it('handles undefined password for getAnalysis', () => {
    let password = {};
    expect(x => analyzer.getAnalysis(password.notDefined, {})).toThrow(Locale.Error.InvalidArgPassword);
  });

  it('gets analysis', () => {
    let password = MockAnalysisData.SimplePassword.Password;
    let expectedAnalysis = MockAnalysisData.SimplePassword.getZxcvbnAnalysisData();
    expect(analyzer.getAnalysis(password, {})).toEqual(expectedAnalysis);
  });
});
