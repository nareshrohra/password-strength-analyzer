import {
  AnalysisBase
}
from '../../analysis-base';

import {
  Locale
}
from '../../../../locale';

import vaow from 'vaow';

import {
  AnalysisItem, TimeAnalysisItem, NumberAnalysisItem
}
from '../../analysis-item';

export class ZxcvbnAnalysis extends AnalysisBase {
  constructor() {
    super(Locale.ZxcvbnAnalysisName);
  }

  setEntropy(entropy) {
    if (window.vaow.util.Validator.isPositiveNumber(entropy)) {
      this.addAnalysisItem(new NumberAnalysisItem("Entropy", entropy));
    } else {
      throw Locale.Error.InvalidArgEntropy;
    }
  }

  setScore(score) {
    if (window.vaow.util.Validator.isPositiveNumber(score)) {
      this.addAnalysisItem(new NumberAnalysisItem("Score", score));
    } else {
      throw Locale.Error.InvalidArgScore;
    }
  }
}
