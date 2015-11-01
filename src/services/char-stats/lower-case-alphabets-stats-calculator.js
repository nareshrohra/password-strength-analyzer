import {
  CharStats
}
from './char-stats';

import vaow from 'vaow';

import {
  Locale
}
from '../../locale';

export class LowerCaseAlphabetsStatsCalculator {
  pattern = new RegExp(/[abcdefghijklmnopqrstuvwxyz]/g);

  getStats(text) {
    if (window.vaow.util.Validator.isDefinedAndNotNull(text)) {
      let matches = text.match(this.pattern);
      let count = matches !== null ? matches.length : 0;
      return new CharStats(Locale.LowerCaseAlphabetStatsName, count, LowerCaseAlphabetsStatsCalculator.CharDepth);
    } else {
      throw Locale.Error.InvalidArgText;
    }
  }
}

LowerCaseAlphabetsStatsCalculator.CharDepth = 26;
