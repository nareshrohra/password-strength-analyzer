import {
  CharStats
}
from './char-stats';

export class NumbersStatsCalculator {
  pattern = new RegExp(/[1234567890]/g);

  getStats(text) {
    let matches = text.match(this.pattern);
    let count = matches !== null ? matches.length : 0;
    return new CharStats('Numbers', count, 10);
  }
}
