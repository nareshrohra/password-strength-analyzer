import {
  CharStats
}
from 'char-stats';

export class AggregateCharStats extends CharStats {
  subStats = [];
  constructor(name) {
    super(name, 0, 0);
  }

  addStats(charStats) {
    this.subStats.push(charStats);
    this.updateAggregate(charStats);
  }

  updateAggregate(charStats) {
    if (charStats.matchCount > 0) {
      this.matchCount += charStats.matchCount;
      this.charDepth += charStats.charDepth;
      this.searchSpace += charStats.charDepth * charStats.matchCount;
    }
  }
}
