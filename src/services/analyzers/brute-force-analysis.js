import {
  AnalysisBase
}
from './analysis-base';

import {
  AnalysisItem, TimeAnalysisItem, NumberAnalysisItem
}
from './analysis-item';

export class BruteForceAnalysis extends AnalysisBase {
  constructor() {
    super('Brute force analysis');
  }

  setSearchSpaceDepth(depth) {
    this.addAnalysisItem(new NumberAnalysisItem("Search space depth", depth) );
  }

  setSearchSpaceLength(length) {
    this.addAnalysisItem(new NumberAnalysisItem("Search space length", length) );
  }

  setSearchSpaceSize(size) {
    this.addAnalysisItem(new NumberAnalysisItem("Search space size", size) );
  }

  setOnlineAttackCrackTime(time) {
    this.addAnalysisItem(new TimeAnalysisItem("Online attack crack time", time) );
  }

  setOfflineAttackCrackTime(time) {
    this.addAnalysisItem(new TimeAnalysisItem("Offline attack crack time", time) );
  }
}
