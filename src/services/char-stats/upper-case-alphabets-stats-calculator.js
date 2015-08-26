import {
  CharStats
}
from './char-stats';

export class UpperCaseAlphabetsStatsCalculator {
  pattern = new RegExp(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g);

  getStats(text) {
    let matches = text.match(this.pattern);
    let count = matches !== null ? matches.length : 0;
    return new CharStats('Upper case', count, 26);
  }
}
