import {
  FormatChainElement
}
from './format-chain-element';

import {
  MagnifiedFormatChainElement
}
from './magnified-format-chain-element';

export class FormatChain {
  constructor() {
    this.setChainStart(null);
  }

  setChainStart(firstElement) {
    if (this.magnifier) {
      this.head = this.tail = new MagnifiedFormatChainElement(firstElement, this.magnifier);
    } else {
      this.head = this.tail = firstElement;
    }
  }

  addChainElement(chainElement) {
    if (this.head) {
      this.appendToChain(chainElement);
    } else {
      this.setChainStart(chainElement);
    }
  }

  appendToChain(chainElement) {
    if (this.magnifier) {
      let magnifiedChainElement = new MagnifiedFormatChainElement(chainElement, this.magnifier);
      this.tail.setNextElement(magnifiedChainElement);
      this.tail = magnifiedChainElement;
    } else {
      this.tail.setNextElement(chainElement);
      this.tail = chainElement;
    }
  }

  addMagnifier(magnifier) {
    this.magnifier = magnifier;
  }

  format(value) {
    if (this.head) {
      return this.performFormatting(value) + (this.magnifier && value >= this.magnifier.getValue() ? ' ' + this.magnifier.getWord() : '');
    } else {
      throw 'Chain is empty';
    }
  }
}
