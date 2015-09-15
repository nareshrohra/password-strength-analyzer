import {
  CharStats
}
from './char-stats';

import vaow from 'vaow';

import {
  Locale
}
from '../../locale';

export class SpecialCaseStatsCalculator {
  pattern = new RegExp(/[`\-=[\]\;',./~!@#$%^&*()_+{}|:"<>?]/g);

  getStats(text) {
    if (window.vaow.Validator.isDefinedAndNotNull(text)) {
      let matches = text.match(this.pattern);
      let count = matches !== null ? matches.length : 0;
      return new CharStats(Locale.SpecialCaseStatsName, count, SpecialCaseStatsCalculator.CharDepth);
    } else {
      throw Locale.Error.InvalidArgText;
    }
  }
}

SpecialCaseStatsCalculator.CharDepth = 33;
