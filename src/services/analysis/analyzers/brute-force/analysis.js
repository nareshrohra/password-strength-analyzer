import vaow from 'vaow';

import {
  AnalysisBase
}
from '../../analysis-base';

import {
  AnalysisItem, TimeAnalysisItem, NumberAnalysisItem
}
from '../../analysis-item';

export class BruteForceAnalysis extends AnalysisBase {
  numberTranslator = window.vaow.NumberTranslator.getInstance();
  constructor() {
    super('Brute force analysis');
  }

  setCharStats(charStats) {
    this.charStats = charStats;
  }

  setSearchSpaceDepth(depth) {
    this.searchSpaceDepth = depth;
  }

  setSearchSpaceLength(length) {
    this.searchSpaceLength = length;
  }

  setSearchSpaceSize(size) {
    this.searchSpaceSize = size;
  }

  setOnlineAttackCrackTime(time, attackSpeed) {
    this.onlineAttackCrackTime = time;
    this.onlineAttackSpeed = attackSpeed;
  }

  setOfflineAttackCrackTime(time, attackSpeed) {
    this.offlineAttackCrackTime = time;
    this.offlineAttackSpeed = attackSpeed;
  }

  build() {
    this.addAnalysisItem(new NumberAnalysisItem("Search space length", this.searchSpaceLength, '', this.searchSpaceLength + ' characters'));

    this.addAnalysisItem(new NumberAnalysisItem("Search space depth", this.searchSpaceDepth, 'number of guesses for each character', this.getDepthValueHint()));

    this.addAnalysisItem(new NumberAnalysisItem("Search space size", this.searchSpaceSize, 'total guesses to attempt', this.getSizeValueHint()));

    let onlineAttackNameHint = 'with ' + this.numberTranslator.translate(this.onlineAttackSpeed) + ' guesses per second';
    this.addAnalysisItem(new TimeAnalysisItem("Online attack crack time", this.onlineAttackCrackTime, onlineAttackNameHint, ''));

    let offlineAttackNameHint = 'with ' + this.numberTranslator.translate(this.offlineAttackSpeed) + ' guesses per second';
    this.addAnalysisItem(new TimeAnalysisItem("Offline attack crack time", this.offlineAttackCrackTime, offlineAttackNameHint, ''));
  }

  getDepthValueHint() {
    let hint = '';
    let allCharStats = this.charStats.getAllStats();
    let charStatsCount = allCharStats.length;
    for (let i = 0; i < charStatsCount; i++) {
      if(allCharStats[i].getMatchCount() > 0 ) {
        hint += (hint !== '' ? ' + ' : '') + allCharStats[i].getCharDepth() + ' (' + allCharStats[i].getName() + ')';
      }
    }
    return hint;
  }

  getSizeValueHint() {
    return this.searchSpaceDepth + '^' + this.searchSpaceLength + (this.searchSpaceLength >= 2 ? ' + ' + this.searchSpaceDepth + '^' + (this.searchSpaceLength - 1) + (this.searchSpaceLength >= 3 ? ' + ...' : '') : '');
  }
}
