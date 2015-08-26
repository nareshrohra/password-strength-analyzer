import {
  NumberFormatter
}
from '../formatters/number-formatter';

import {
  TimeFormatter
}
from '../formatters/time-formatter';

export class AnalysisItem {
  constructor(name, value) {
    this.name = name;
    this.value = this.text = value;
  }

  setFormatter(formatter) {
    this.formatter = formatter;
  }

  setFormattedText() {
    this.text = this.formatter.getFormattedText(this.value);
  }

  getName() {
    return this.name;
  }

  getText() {
    return this.text;
  }
}

export class TimeAnalysisItem extends AnalysisItem {
  constructor(name, seconds) {
    super(name, seconds);
    this.setFormatter(TimeFormatter.getInstance());
    this.setFormattedText();
  }
}

export class NumberAnalysisItem extends AnalysisItem {
  constructor(name, number) {
    super(name, number);
    this.setFormatter(NumberFormatter.getInstance());
    this.setFormattedText();
  }
}
