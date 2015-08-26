import {
  NumberMagnitudeFormatChainElement
}
from './chain-constants';

export class ChainFormatter {
  addNumberChains(formatChain) {
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Million);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Billion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Trillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Quadrillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Quintillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Sextillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Septillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Octillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Nonillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Decillion);
    formatChain.addChainElement(NumberMagnitudeFormatChainElement.Undecillion);
  }
}
