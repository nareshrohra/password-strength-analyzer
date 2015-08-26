import {
  RawFormatter
}
from './raw-formatter';

export class FormatChainElement {
  constructor(magnitude) {
    this.magnitude = magnitude;
    this.nextElement = null;
  }

  getValue() {
    return this.magnitude.getValue();
  }

  getText() {
    return this.magnitude.getText();
  }

  setNextElement(nextElement) {
    this.nextElement = nextElement;
  }

  format(value) {
    let formattedValue = value.toString();
    if (this.nextElement && value < this.nextElement.getValue()) {
      return this.currentFormat(formattedValue);
    } else {
      if (this.nextElement) {
        return this.nextElement.format(value);
      } else {
        return null;
      }
    }
  }

  currentFormat(value) {
    let conversionFactor = this.getValue();
    conversionFactor = conversionFactor !== 0 ? conversionFactor : 1;
    let demagnifiedValue = Math.round(value / conversionFactor);
    return RawFormatter.formatWithCommaSeparator(demagnifiedValue) + this.getSuffixString();
  }

  getSuffixString() {
    let suffix = this.getText();
    return suffix && suffix !== '' ? ' ' + suffix : '';
  }
}
