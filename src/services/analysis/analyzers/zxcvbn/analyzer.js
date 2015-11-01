import {
  ZxcvbnAnalysis
}
from './analysis';

import zxcvbn from 'zxcvbn';

import {
  Locale
}
from '../../../../locale';

import vaow from 'vaow';

export class ZxcvbnAnalyzer {
  analysis = null;

  constructor() {}

  getAnalysis(password, options) {
    if (window.vaow.util.Validator.isDefinedAndNotNull(password)) {
      this.password = password;
      this.analyze();
      return this.analysis;
    } else {
      throw Locale.Error.InvalidArgPassword;
    }
  }

  analyze() {
    this.analysis = new ZxcvbnAnalysis();
    let result = zxcvbn(this.password);
    this.analysis.setEntropy(result.entropy);
    this.analysis.setScore(result.score);
  }
}
