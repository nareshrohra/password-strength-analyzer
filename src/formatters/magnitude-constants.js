
class Magnitude {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }

  getText() {
    return this.text;
  }

  getValue(){
    return this.value;
  }
}

export class TimeMagnitude {
}

TimeMagnitude.Second = new Magnitude('seconds', 0);
TimeMagnitude.Minute = new Magnitude('minutes', 60);
TimeMagnitude.Hour = new Magnitude('hours', TimeMagnitude.Minute.getValue() * 60);
TimeMagnitude.Day = new Magnitude('days', TimeMagnitude.Hour.getValue() * 24);
TimeMagnitude.Month = new Magnitude('months', TimeMagnitude.Day.getValue() * 30.43);
TimeMagnitude.Year = new Magnitude('years', TimeMagnitude.Day.getValue() * 365.24);
TimeMagnitude.Decade = new Magnitude('decades', TimeMagnitude.Year.getValue() * 10);
TimeMagnitude.Century = new Magnitude('centuries', TimeMagnitude.Year.getValue() * 100);

export class NumberMagnitude {
}

NumberMagnitude.BelowMillion = new Magnitude('', 0);
NumberMagnitude.Million = new Magnitude('million', Math.pow(10, 6));
NumberMagnitude.Billion = new Magnitude('billion', Math.pow(10, 9));
NumberMagnitude.Trillion = new Magnitude('trillion', Math.pow(10, 12));
NumberMagnitude.Quadrillion = new Magnitude('quadrillion', Math.pow(10, 15));
NumberMagnitude.Quintillion = new Magnitude('quintillion', Math.pow(10, 18));
NumberMagnitude.Sextillion = new Magnitude('sextillion', Math.pow(10, 21));
NumberMagnitude.Septillion = new Magnitude('septillion', Math.pow(10, 24));
NumberMagnitude.Octillion = new Magnitude('octillion', Math.pow(10, 27));
NumberMagnitude.Nonillion = new Magnitude('nonillion', Math.pow(10, 30));
NumberMagnitude.Decillion = new Magnitude('decillion', Math.pow(10, 33));
NumberMagnitude.Undecillion = new Magnitude('undecillion', Math.pow(10, 36));
