import {
  AnalysisBase
}
from '../../analysis-base';

import {
  AnalysisItem, TimeAnalysisItem, NumberAnalysisItem
}
from '../../analysis-item';

export class ZxcvbnAnalysis extends AnalysisBase {
  constructor() {
    super('zxcvbn analysis');
  }

  setEntropy(entropy) {
    this.addAnalysisItem(new NumberAnalysisItem("Entropy", entropy) );
  }

  setScore(score) {
    this.addAnalysisItem(new NumberAnalysisItem("Score", score) );
  }
}
