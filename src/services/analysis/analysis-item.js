import {
  NumberTranslator
}
from 'vaow';

export class AnalysisItem {
  constructor(name, value) {
    this.name = name;
    this.value = this.text = value;
  }

  setTranslator(translator) {
    this.translator = translator;
  }

  setTranslationText() {
    this.text = this.translator.translate(this.value);
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
    this.setTranslator(window.vaow.TimeTranslator.getInstance());
    this.setTranslationText();
  }
}

export class NumberAnalysisItem extends AnalysisItem {
  constructor(name, number) {
    super(name, number);
    this.setTranslator(window.vaow.NumberTranslator.getInstance());
    this.setTranslationText();
  }
}
