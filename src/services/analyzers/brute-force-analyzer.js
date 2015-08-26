import {
  CharStatsCalculator
}
from '../char-stats/char-stats-calculator';
import {
  BruteForceAnalysis
}
from '../analyzers/brute-force-analysis';

export class BruteForceAnalyzer {
  analysis = null;

  constructor() {
  }

  getAnalysis(pwd, options) {
    this.password = pwd;
    this.options = options;
    this.analyze();
    return this.analysis;
  }

  analyze() {
    this.analysis = new BruteForceAnalysis();
    let charStats = new CharStatsCalculator().getStats(this.password);
    let searchSpaceDepth = charStats.getCharDepth(),
      searchSpaceLength = this.password.length;

    var searchSpaceSize = this.calculateSearchSpaceSize(searchSpaceDepth, searchSpaceLength)

    this.calculateCrackTime(searchSpaceSize);

    this.analysis.setSearchSpaceDepth(searchSpaceDepth);
    this.analysis.setSearchSpaceLength(searchSpaceLength);
    this.analysis.setSearchSpaceSize(searchSpaceSize);
  }

  calculateSearchSpaceSize(spaceDepth, spaceLength) {
    return Math.pow(spaceDepth, spaceLength);
  }

  calculateCrackTime(searchSpaceSize) {
    let onlineTime = this.getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, this.options.getOnlineAttackSpeed());
    this.analysis.setOnlineAttackCrackTime(onlineTime);

    let offlineTime = this.getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, this.options.getOfflineAttackSpeed());
    this.analysis.setOfflineAttackCrackTime(offlineTime);
  }

  getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, speed) {
    return searchSpaceSize / speed;
  }
}
