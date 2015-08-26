import {
  FormatChainElement
}
from './format-chain-element';

import {
  CircularFormatChain
}
from './circular-format-chain';

import {
  TimeMagnitude, NumberMagnitude
}
from './magnitude-constants';

import {
  TimeMagnitudeFormatChainElement
}
from './chain-constants';

import {
  ChainFormatter
}
from './chain-formatter';

import {
  Magnifier
}
from './magnifier';

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
    let formatChain = new CircularFormatChain();
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
    let centuryMagnifier = new Magnifier(TimeMagnitudeFormatChainElement.Century.getText(), TimeMagnitudeFormatChainElement.Century.getValue());
    formatChain.addMagnifier(centuryMagnifier);
  }

  getFormattedText(seconds) {
    if (seconds && !isNaN(seconds)) {
      let formattedText = this.formatChain.format(Math.round(seconds));
      return formattedText;
    } else {
      throw "time is invalid";
    }
  }
}
