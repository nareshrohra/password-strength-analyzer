export class FormatChain {
  constructor() {
    this.setChainStart(null);
  }

  setChainStart(firstElement) {
    this.head = this.tail = firstElement;
  }

  addChainElement(chainElement) {
    if (this.head) {
      this.appendToChain(chainElement);
    } else {
      this.setChainStart(chainElement);
    }
  }

  appendToChain(chainElement) {
    this.tail.setNextElement(chainElement);
    this.tail = chainElement;
  }

  format(value) {
    if (this.head) {
      return this.head.format(value);
    } else {
      throw 'Head of the chain is not set';
    }
  }
}

export class FormatChainElement {
  constructor(magnitude) {
    this.magnitude = magnitude;
    this.nextElement = null;
  }

  getMagnitudeValue() {
    return this.magnitude.getValue();
  }

  setNextElement(nextElement) {
    this.nextElement = nextElement;
  }

  format(value) {
    let formattedValue = value.toString();
    if (value < this.nextElement.getMagnitudeValue()) {
      return this.currentFormat(formattedValue);
    } else if (this.nextElement) {
      return this.nextElement.format(value);
    } else {
      return new FallbackFormatter().format(value);
    }
  }

  currentFormat(value) {
    let conversionFactor = this.magnitude.getValue();
    conversionFactor = conversionFactor !== 0 ? conversionFactor : 1;
    return (Math.round(value / conversionFactor)).toString() + this.getSuffixString();
  }

  getSuffixString() {
    let suffix = this.magnitude.getText();
    return suffix && suffix !== '' ? ' ' + suffix : '';
  }
}

export class FallbackFormatter {
  format(value) {
    let formattedValue = value.toString();

    return this.getMantissa(formattedValue) + ' X 10^' + this.getExponent(formattedValue);
  }

  getExponent(formattedValue) {
    return formattedValue.substring(formattedValue.indexOf("+") + 1);
  }

  getMantissa(formattedValue) {
    let decimalPosition = formattedValue.indexOf('.');
    return formattedValue.substring(0, decimalPosition + 3);
  }
}
