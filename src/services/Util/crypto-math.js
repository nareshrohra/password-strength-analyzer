import vaow from 'vaow';

import {
  Locale
}
from '../../locale';

export class CryptoMath {
  static caculateSearchSpaceSize(depth, length) {
    if (!window.vaow.Validator.isNonZeroPositiveNumber(depth)) {
      throw Locale.Error.InvalidArgDepth;
    }

    if (!window.vaow.Validator.isNonZeroPositiveNumber(length)) {
      throw Locale.Error.InvalidArgLength;
    }

    if (length === 1 || depth == 1) {
      return depth * length;
    } else {
      return Math.pow(depth, length) + CryptoMath.caculateSearchSpaceSize(depth, length - 1);
    }
  }
}
