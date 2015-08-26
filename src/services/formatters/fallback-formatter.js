import {
  RawFormatter
}
from './raw-formatter';

export class FallbackFormatter {
  static format(value) {
    let formattedValue = value.toString();
    let mantissa = this.getMantissa(formattedValue),
      exponent = this.getExponent(formattedValue);
    return RawFormatter.formatWithCommaSeparator(mantissa) + (exponent > 1 ? ' X 10^' + exponent : '');
  }

  static getExponent(formattedValue) {
    return formattedValue.substring(formattedValue.indexOf("+") + 1);
  }

  static getMantissa(formattedValue) {
    let decimalPosition = formattedValue.indexOf('.');
    return formattedValue;
  }
}
