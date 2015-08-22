import {
  FormatChain, FormatChainElement
}
from 'format-chain';

import {
  NumberMagnitude
}
from 'magnitude-constants';

import {
  ChainFormatter
}
from 'chain-formatter';

import {
  NumberMagnitudeFormatChainElement
}
from 'chain-constants';

export class NumberFormatter extends ChainFormatter {
  static instance;

  static getInstance() {
    if (!NumberFormatter.instance) {
      NumberFormatter.instance = new NumberFormatter();
    }
    return NumberFormatter.instance;
  }

  constructor() {
    super();
    this.constructChain();
  }

  constructChain() {
    let formatChain = new FormatChain();
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.BelowMillion);
    this.addNumberChains(formatChain);
    this.formatChain = formatChain;
  }

  getFormattedText(number) {
    let formattedText = this.formatChain.format(Math.round(number));
    return formattedText;
  }
}
