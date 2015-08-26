import {
  CircularFormatChain
}
from '../../src/services/formatters/circular-format-chain';

import {
  FormatChainElement
}
from '../../src/services/formatters/format-chain-element';

import {
  Magnifier
}
from '../../src/services/formatters/magnifier';


import {
  NumberMagnitude
}
from '../../src/services/formatters/magnitude-constants';

import {
  Magnitude
}
from '../../src/services/formatters/magnitude';

import {
  NumberMagnitudeFormatChainElement
}
from '../../src/services/formatters/chain-constants';

let formatChain = null;

beforeEach(() => {
  formatChain = new CircularFormatChain();
});

describe('the FormatChain module', () => {
  it('handles empty chain', () => {
    expect(x => formatChain.format()).toThrow();
  });

  it('formats with a single chain element', () => {
    let magnitude = new Magnitude("grand", 1000);
    let magnitudeChainElement = new FormatChainElement(magnitude);
    formatChain.addChainElement(magnitudeChainElement);
    expect(formatChain.format(1000)).toBe("1 grand");
  });

  it('formats with magnification in between', () => {
    let mm = new Magnitude("millimeters", 0),
    mmChainElement = new FormatChainElement(mm);
    let feet = new Magnifier("feet", 304.8);

    let value = NumberMagnitude.Million.getValue() * feet.getValue();
    formatChain.addChainElement(mmChainElement);
    formatChain.addMagnifier(feet);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Million)
    expect(formatChain.format(value)).toBe("1 million feet");
  });

  it('formats with magnification in between but value is below magnification', () => {
    let mm = new Magnitude("millimeters", 0),
    mmChainElement = new FormatChainElement(mm);
    let feet = new Magnifier("feet", 304.8);

    let value = 300;
    formatChain.addChainElement(mmChainElement);
    formatChain.addMagnifier(feet);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Million)
    expect(formatChain.format(value)).toBe("300 millimeters");
  });
});
