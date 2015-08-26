import {
  FormatChain
}
from './format-chain';

import {
  FallbackFormatter
}
from './fallback-formatter';

export class CircularFormatChain extends FormatChain {
  constructor() {
    super();
  }

  performFormatting(currentValue) {
    if (currentValue >= this.head.getValue()) {
      let formattedString = this.head.format(currentValue);
      if (formattedString) {
        return formattedString;
      } else {
        let newValue = currentValue / this.tail.getValue();
        return this.performFormatting(newValue) + ' ' + this.tail.getText();
      }
    } else {
      return FallbackFormatter.format(currentValue);
    }
  }
}
