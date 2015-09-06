import {
  BruteForceAnalyzer
}
from '../brute-force/analyzer';

import {
  ZxcvbnAnalyzer
}
from '../zxcvbn/analyzer';

export class CompositeAnalyzer {
  analyzers = [];
  analyses = [];

  constructor() {
  }

  addAnalyzer(analyzer) {
    this.analyzers.push(analyzer);
  }

  getAnalyses(pwd, options) {
    this.password = pwd;
    this.options = options;
    this.analyses.length = 0;
    this.analyze();
    return this.analyses;
  }

  analyze() {
    let analyzersCount = this.analyzers.length;
    for (let i = 0; i < analyzersCount; i++) {
      let analysis = this.analyzers[i].getAnalysis(this.password, this.options);
      this.analyses.push(analysis);
    }
  }
}

export class FullAnalyzer extends CompositeAnalyzer {
  constructor() {
    super();
    this.constructAnalyzers();
  }

  constructAnalyzers(){
    this.addAnalyzer(new BruteForceAnalyzer());
    this.addAnalyzer(new ZxcvbnAnalyzer());
  }
}
