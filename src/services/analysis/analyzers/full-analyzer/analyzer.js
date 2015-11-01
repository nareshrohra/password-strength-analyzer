import vaow from 'vaow';

import {
  Locale
}
from '../../../../locale';

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
    if (window.vaow.util.Validator.isDefinedAndNotNull(analyzer)) {
      this.analyzers.push(analyzer);
    } else {
      throw Locale.Error.InvalidArgAnalyzer;
    }
  }

  getAnalysis(password, options) {
    this.validateAnalysisInput(password, options);
    this.password = password;
    this.options = options;
    this.analyses.length = 0;
    this.analyze();
    return this.analyses;
  }

  validateAnalysisInput(password, options) {
    if (!window.vaow.util.Validator.isDefinedAndNotNull(password)) {
      throw Locale.Error.InvalidArgPassword;
    }

    if (!window.vaow.util.Validator.isDefinedAndNotNull(options)) {
      throw Locale.Error.InvalidArgOptions;
    }
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
