import {
  Locale
}
from '../../../../src/locale';

import {
  AnalysisBase
}
from '../../../../src/services/analysis/analysis-base';

import {
  AnalysisItem
}
from '../../../../src/services/analysis/analysis-item';

describe('the AnalysisBase class', () => {
  it('handles null value for name parameter', () => {
    let name = null;
    expect(x => new AnalysisBase(name)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles undefined value for name parameter', () => {
    let name = {};
    expect(x => new AnalysisBase(name.notDefined)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles null parameter for adding analysis item', () => {
    let analysis = new AnalysisBase('Test Analysis');
    let analysisItem = null;
    expect(x => analysis.addAnalysisItem(analysisItem)).toThrow(Locale.Error.InvalidArgAnalysisItem);
  });

  it('handles undefined parameter for adding analysis item', () => {
    let analysis = new AnalysisBase('Test Analysis');
    let analysisItem = {};
    expect(x => analysis.addAnalysisItem(analysisItem.notDefined)).toThrow(Locale.Error.InvalidArgAnalysisItem);
  });

  it('gets Name', () => {
    let name = 'Test Analysis';
    let analysis = new AnalysisBase(name);
    expect(analysis.getName()).toBe(name);
  });

  it('adds and gets single analysis item', () => {
    let analysis = new AnalysisBase('Test Analysis');
    let score = new AnalysisItem('Score', 5, 'Score between 1 to 5', 'Excellent');
    analysis.addAnalysisItem(score)
    expect(analysis.getAllItems()).toEqual([score]);
  });

  it('adds and gets multiple analysis items', () => {
    let analysis = new AnalysisBase('Test Analysis');
    let score = new AnalysisItem('Score', '5', 'Score between 1 to 5', 'Excellent');
    analysis.addAnalysisItem(score)
    let crackTime = new AnalysisItem('Crack Time', 'Instant', 'Time to crack', 'in a snap');
    analysis.addAnalysisItem(crackTime)
    expect(analysis.getAllItems()).toEqual([score, crackTime]);
  });
});
