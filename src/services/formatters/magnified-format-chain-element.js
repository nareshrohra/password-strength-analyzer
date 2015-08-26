import {
  FormatChainElement
}
from './format-chain-element';

export class MagnifiedFormatChainElement extends FormatChainElement {
  constructor(magnitude, magnifier) {
    super(magnitude);
    this.magnifier = magnifier;
  }

  getValue() {
    return this.magnitude.getValue() * this.magnifier.getValue();
  }
}
