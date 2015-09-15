import {
  Validator
}
from '../util/validator';

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
    if (!Validator.isDefinedAndNotNull(name)) {
      throw Locale.Error.InvalidArgName;
    }

    if (!Validator.isPositiveNumber(matchCount)) {
      throw Locale.Error.InvalidArgMatchCount;
    }

    if (!Validator.isPositiveNumber(charDepth)) {
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
