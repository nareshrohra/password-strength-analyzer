import {
  ZxcvbnAnalysis
}
from './analysis';

import zxcvbn from 'zxcvbn';

export class ZxcvbnAnalyzer {
  analysis = null;

  constructor() {}

  getAnalysis(pwd, options) {
    this.password = pwd;
    this.options = options;
    this.analyze();
    return this.analysis;
  }

  analyze() {
    this.analysis = new ZxcvbnAnalysis();
    let analysis = zxcvbn(this.password);
    this.analysis.setEntropy(analysis.entropy);
    this.analysis.setScore(analysis.score);
  }
}
