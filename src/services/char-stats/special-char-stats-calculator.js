import {
  CharStats
}
from './char-stats';

export class SpecialCharStatsCalculator {
  pattern = new RegExp(/[`1234567890-=[\]\;',./~!@#$%^&*()_+{}|:"<>?]/g);

  getStats(text) {
    let matches = text.match(this.pattern);
    let count = matches !== null ? matches.length : 0;
    return new CharStats('Special characters', count, 43);
  }
}
