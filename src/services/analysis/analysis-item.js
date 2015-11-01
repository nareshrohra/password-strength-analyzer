import {
  Locale
}
from '../../locale';

import vaow from 'vaow';

export class AnalysisItem {
  constructor(name, value, nameHint, valueHint) {
    this.highValueThreshold = Math.pow(10, 6);
    this.validate(name, value);
    this.name = name;
    this.value = this.text = value;
    this.nameHint = nameHint;
    this.valueHint = valueHint;
  }

  setHighValueThreshold(threshold) {
    this.highValueThreshold = threshold;
  }

  validate(name, value) {
    if(!window.vaow.util.Validator.isDefinedAndNotNull(name)) {
      throw Locale.Error.InvalidArgName;
    }

    if(!window.vaow.util.Validator.isDefinedAndNotNull(value)) {
      throw Locale.Error.InvalidArgValue;
    }
  }

  setTranslator(translator) {
    this.translator = translator;
  }

  setTranslationText() {
    this.text = this.translator.translate(this.value);
  }

  appendToTranslatedText(text) {
    this.text += text;
  }

  getName() {
    return this.name;
  }

  getNameHint() {
    return this.nameHint || '';
  }

  hasNameHint(){
    return this.getNameHint().length > 0;
  }

  getText() {
    return this.text;
  }

  getTextHint() {
    return this.valueHint || '';
  }

  hasTextHint(){
    return this.getTextHint().length > 0;
  }

  isHighValue() {
    return this.value >= this.highValueThreshold;
  }
}

export class TimeAnalysisItem extends AnalysisItem {
  constructor(name, seconds, nameHint, valueHint) {
    super(name, seconds, nameHint, valueHint);
    this.setTranslator(new window.vaow.TimeTranslator());
    this.setTranslationText();
  }
}

export class NumberAnalysisItem extends AnalysisItem {
  constructor(name, number, nameHint, valueHint) {
    super(name, number, nameHint, valueHint);
    this.setTranslator(new window.vaow.NumberTranslator());
    this.setTranslationText();
    if(this.isHighValue()) {
      let formattedText = window.vaow.NumberFormatter.format(this.value);
      this.appendToTranslatedText(' (' + formattedText + ')');
    }
  }
}
