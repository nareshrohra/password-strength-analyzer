import {
  CharStats
}
from 'char-stats';

export class LowerCaseAlphabetsStatsCalculator {
  pattern = new RegExp(/[abcdefghijklmnopqrstuvwxyz]/g);

  getStats(text) {
    let matches = text.match(this.pattern);
    let count = matches !== null ? matches.length : 0;
    return new CharStats('Lower case', count, 26);
  }
}
