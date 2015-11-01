import vaow from 'vaow';

import {
  Locale
}
from '../../locale';

export class CharStats {
  constructor(name, matchCount, charDepth) {
    this.validate(name, matchCount, charDepth);

    this.name = name;
    this.matchCount = matchCount;
    this.charDepth = charDepth;
  }

  validate(name, matchCount, charDepth) {
    if (!window.vaow.util.Validator.isDefinedAndNotNull(name)) {
      throw Locale.Error.InvalidArgName;
    }

    if (!window.vaow.util.Validator.isPositiveNumber(matchCount)) {
      throw Locale.Error.InvalidArgMatchCount;
    }

    if (!window.vaow.util.Validator.isPositiveNumber(charDepth)) {
      throw Locale.Error.InvalidArgCharDepth;
    }
  }

  getName() {
    return this.name;
  }

  getMatchCount() {
    return this.matchCount;
  }

  getCharDepth() {
    return this.charDepth;
  }
}
