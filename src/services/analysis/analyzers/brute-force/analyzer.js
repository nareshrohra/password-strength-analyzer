import {
  CharStatsCalculator
}
from '../../../char-stats/char-stats-calculator';
import {
  BruteForceAnalysis
}
from './analysis';
import {
  CryptoMath
}
from '../../../Util/crypto-math';

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
    this.analysis.setCharStats(charStats);
    this.analysis.setSearchSpaceLength(searchSpaceLength);
    this.analysis.setSearchSpaceDepth(searchSpaceDepth);
    this.analysis.setSearchSpaceSize(searchSpaceSize);
    this.calculateCrackTime(searchSpaceSize);
    this.analysis.build();
  }

  calculateSearchSpaceSize(spaceDepth, spaceLength) {
    return CryptoMath.caculateSearchSpaceSize(spaceDepth, spaceLength);
  }

  calculateCrackTime(searchSpaceSize) {
    let onlineTime = this.getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, this.options.getOnlineAttackSpeed());
    this.analysis.setOnlineAttackCrackTime(onlineTime, this.options.getOnlineAttackSpeed());

    let offlineTime = this.getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, this.options.getOfflineAttackSpeed());
    this.analysis.setOfflineAttackCrackTime(offlineTime, this.options.getOfflineAttackSpeed());
  }

  getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, speed) {
    return searchSpaceSize / speed;
  }
}
