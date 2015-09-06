import {
  OptionsModel
}
from './options';

import {
  ResultsModel
}
from './results';

import {
  FullAnalyzer
}
from '../../services/analysis/analyzers/full-analyzer/analyzer';

export class Index {
  password = '';
  analyzer = new FullAnalyzer();
  options = new OptionsModel(1000, 100);
  results = null;

  constructor() {
    this.resetResults();
  }

  resetResults() {
    this.results = null;
  }

  passwordChanged() {
    this.performAnalysis();
    return true;
  }

  optionsChanged() {
    this.performAnalysis();
    return true;
  }

  performAnalysis() {
    this.resetResults();
    if (this.password) {
      this.results = this.getAllAnalysis();
    }
  }

  getAllAnalysis() {
    let results = new ResultsModel(),
      analyses = this.analyzer.getAnalyses(this.password, this.options);
    results.addAnalyses(analyses);
    return results;
  }
}
