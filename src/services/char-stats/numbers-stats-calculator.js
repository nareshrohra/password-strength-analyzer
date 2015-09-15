import {
  CharStats
}
from './char-stats';

import {
  Validator
}
from '../util/validator';

import {
  Locale
}
from '../../locale';

export class NumbersStatsCalculator {
  pattern = new RegExp(/[1234567890]/g);

  getStats(text) {
    if (Validator.isDefinedAndNotNull(text)) {
      let matches = text.match(this.pattern);
      let count = matches !== null ? matches.length : 0;
      return new CharStats(Locale.NumbersStatsName, count, NumbersStatsCalculator.CharDepth);
    } else {
      throw Locale.Error.InvalidArgText;
    }
  }
}

NumbersStatsCalculator.CharDepth = 10;
