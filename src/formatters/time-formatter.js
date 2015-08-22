import {
  FormatChain, FormatChainElement
}
from 'format-chain';

import {
  TimeMagnitude, NumberMagnitude
}
from 'magnitude-constants';

import {
  TimeMagnitudeFormatChainElement
}
from 'chain-constants';

import {
  ChainFormatter
}
from 'chain-formatter';

export class TimeFormatter extends ChainFormatter {
  static instance;

  static getInstance() {
    if (!TimeFormatter.instance) {
      TimeFormatter.instance = new TimeFormatter();
    }
    return TimeFormatter.instance;
  }

  constructor() {
    super();
    this.constructChain();
  }

  constructChain() {
    let formatChain = new FormatChain();
    this.addTimeChains(formatChain);
    this.addNumberChains(formatChain);
    this.formatChain = formatChain;
  }

  addTimeChains(formatChain) {
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Second);
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Minute);
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Hour);
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Day);
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Month);
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Year);
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Decade);
    formatChain.addChainElement(TimeMagnitudeFormatChainElement.Century);
  }

  getFormattedText(number) {
    let formattedText = this.formatChain.format(Math.round(number));
    return formattedText;
  }
}
