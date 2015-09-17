import {
  ZxcvbnAnalysis
}
from '../../src/services/analysis/analyzers/zxcvbn/analysis';

import {
  BruteForceAnalysis
}
from '../../src/services/analysis/analyzers/brute-force/analysis';

import {
  CharStatsCalculator
}
from '../../src/services/char-stats/char-stats-calculator';

import {
  OptionsModel
}
from '../../src/views/analysis/options';

export class MockAnalysisData {
  static getDefaultOptions() {
    let options = new OptionsModel(1000, 100);
    return options;
  }
}

class SimplePassword {
  Password = 'Simple';

  getZxcvbnAnalysisData(options) {
    let analysis = new ZxcvbnAnalysis();
    analysis.setEntropy(9.842);
    analysis.setScore(0);
    return analysis;
  }

  getBruteForceAnalysisData(options) {
    let analysis = new BruteForceAnalysis();
    let charStats = new CharStatsCalculator().getStats(this.Password);
    let searchSpaceDepth = 52,
      searchSpaceLength = 6;

    let searchSpaceSize = 20158268676;
    analysis.setCharStats(charStats);
    analysis.setSearchSpaceLength(searchSpaceLength);
    analysis.setSearchSpaceDepth(searchSpaceDepth);
    analysis.setSearchSpaceSize(searchSpaceSize);

    analysis.setOnlineAttackCrackTime(20158268.676, options.getOnlineAttackSpeed());
    analysis.setOfflineAttackCrackTime(0.20158268676, options.getOfflineAttackSpeed());

    analysis.build();
    return analysis;
  }

  getFullAnalysisData(options) {
    let bruteforceAnalysis = this.getBruteForceAnalysisData(options);
    let zxcvbnAnalysis = this.getZxcvbnAnalysisData(options);
    return [bruteforceAnalysis, zxcvbnAnalysis];
  }
}

MockAnalysisData.SimplePassword = new SimplePassword();
