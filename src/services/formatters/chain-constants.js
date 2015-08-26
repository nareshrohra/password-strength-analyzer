import {
  NumberMagnitude, TimeMagnitude
}
from './magnitude-constants';

import {
  FormatChainElement
}
from './format-chain-element';

export class NumberMagnitudeFormatChainElement {

}

NumberMagnitudeFormatChainElement.BelowMillion = new FormatChainElement(NumberMagnitude.BelowMillion);
NumberMagnitudeFormatChainElement.Million = new FormatChainElement(NumberMagnitude.Million);
NumberMagnitudeFormatChainElement.Billion = new FormatChainElement(NumberMagnitude.Billion);
NumberMagnitudeFormatChainElement.Trillion = new FormatChainElement(NumberMagnitude.Trillion);
NumberMagnitudeFormatChainElement.Quadrillion = new FormatChainElement(NumberMagnitude.Quadrillion);
NumberMagnitudeFormatChainElement.Quintillion = new FormatChainElement(NumberMagnitude.Quintillion);
NumberMagnitudeFormatChainElement.Sextillion = new FormatChainElement(NumberMagnitude.Sextillion);
NumberMagnitudeFormatChainElement.Septillion = new FormatChainElement(NumberMagnitude.Septillion);
NumberMagnitudeFormatChainElement.Octillion = new FormatChainElement(NumberMagnitude.Octillion);
NumberMagnitudeFormatChainElement.Nonillion = new FormatChainElement(NumberMagnitude.Nonillion);
NumberMagnitudeFormatChainElement.Decillion = new FormatChainElement(NumberMagnitude.Decillion);
NumberMagnitudeFormatChainElement.Undecillion = new FormatChainElement(NumberMagnitude.Undecillion);

export class TimeMagnitudeFormatChainElement {

}

TimeMagnitudeFormatChainElement.Second = new FormatChainElement(TimeMagnitude.Second);
TimeMagnitudeFormatChainElement.Minute = new FormatChainElement(TimeMagnitude.Minute);
TimeMagnitudeFormatChainElement.Hour = new FormatChainElement(TimeMagnitude.Hour);
TimeMagnitudeFormatChainElement.Day = new FormatChainElement(TimeMagnitude.Day);
TimeMagnitudeFormatChainElement.Month = new FormatChainElement(TimeMagnitude.Month);
TimeMagnitudeFormatChainElement.Year = new FormatChainElement(TimeMagnitude.Year);
TimeMagnitudeFormatChainElement.Decade = new FormatChainElement(TimeMagnitude.Decade);
TimeMagnitudeFormatChainElement.Century = new FormatChainElement(TimeMagnitude.Century);
