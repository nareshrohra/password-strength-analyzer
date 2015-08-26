import {
  Options, OptionsModel
}
from './options';

import {
  ResultsModel
}
from './results';

import {
  BruteForceAnalyzer
}
from './services/analyzers/brute-force-analyzer';

export class Analysis {
  password = '';
  analyzers = [new BruteForceAnalyzer()];
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
      analyzersCount = this.analyzers.length,
      analysis;
    for (let i = 0; i < analyzersCount; i++) {
      analysis = this.analyzers[i].getAnalysis(this.password, this.options);
      results.addAnalysis(analysis);
    }
    return results;
  }
}
