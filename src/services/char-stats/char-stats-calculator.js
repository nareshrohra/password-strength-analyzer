import {
  LowerCaseAlphabetsStatsCalculator
}
from './lower-case-alphabets-stats-calculator';
import {
  UpperCaseAlphabetsStatsCalculator
}
from './upper-case-alphabets-stats-calculator';
import {
  NumbersStatsCalculator
}
from './numbers-stats-calculator';
import {
  SpecialCharStatsCalculator
}
from './special-char-stats-calculator';
import {
  CharStats
}
from './char-stats';
import {
  AggregateCharStats
}
from './aggregate-char-stats';

export class CharStatsCalculator {
  constructor() {
    this.statsCalculators = [
      new LowerCaseAlphabetsStatsCalculator(),
      new UpperCaseAlphabetsStatsCalculator(),
      new NumbersStatsCalculator(),
      new SpecialCharStatsCalculator()
    ];
  }

  getStats(text) {
    let totalStats = new AggregateCharStats("TotalStats");

    let calculatorsCount = this.statsCalculators.length;

    for (let i = 0; i < calculatorsCount; i++) {
      let statsCalculator = this.statsCalculators[i];
      let stats = statsCalculator.getStats(text);
      totalStats.addStats(stats);
    }

    this.totalStats = totalStats;
    return this.totalStats;
  }
}
