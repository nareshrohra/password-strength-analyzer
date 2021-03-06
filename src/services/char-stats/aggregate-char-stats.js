import {
  CharStats
}
from './char-stats';

import vaow from 'vaow';

import {
  Locale
}
from '../../locale';

export class AggregateCharStats extends CharStats {
  subStats = [];
  constructor(name) {
    super(name, 0, 0);
  }

  getAllStats() {
    return this.subStats;
  }

  addStats(charStats) {
    if (window.vaow.util.Validator.isDefinedAndNotNull(charStats)) {
      this.subStats.push(charStats);
      this.updateAggregate(charStats);
    } else {
      throw Locale.Error.InvalidArgCharStats;
    }
  }

  updateAggregate(charStats) {
    if (charStats.matchCount > 0) {
      this.matchCount += charStats.matchCount;
      this.charDepth += charStats.charDepth;
      this.searchSpace += charStats.charDepth * charStats.matchCount;
    }
  }
}
