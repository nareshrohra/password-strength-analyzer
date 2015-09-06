import {
  computedFrom, bindable
}
from 'aurelia-framework';

import 'foundation/js/foundation/foundation';
import 'foundation/js/foundation/foundation.slider';

export class Results {@
  bindable model = null;
  hasAnalysis = false;

  modelChanged() {
    this.hasAnalysis = this.model && this.model.hasAnalysis();
  }
}

export class ResultsModel {
  analyses = [];
  addAnalyses(analyses) {
    let analysesCount = analyses.length;
    for (let i = 0; i < analysesCount; i++) {
      this.analyses.push(analyses[i]);
    }
  }

  addAnalysis(analysis) {
    this.analyses.push(analysis);
  }

  hasAnalysis() {
    return this.analyses && this.analyses.length > 0;
  }

  getAllAnalyses() {
    return this.analyses;
  }
}
