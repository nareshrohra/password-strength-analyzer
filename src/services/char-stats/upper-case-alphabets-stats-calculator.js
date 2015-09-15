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

export class UpperCaseAlphabetsStatsCalculator {
  pattern = new RegExp(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g);

  getStats(text) {
    if (Validator.isDefinedAndNotNull(text)) {
      let matches = text.match(this.pattern);
      let count = matches !== null ? matches.length : 0;
      return new CharStats('upper-case', count, UpperCaseAlphabetsStatsCalculator.CharDepth);
    } else {
      throw Locale.Error.InvalidArgText;
    }
  }
}

UpperCaseAlphabetsStatsCalculator.CharDepth = 26;
