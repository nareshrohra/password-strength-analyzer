import {
  Locale
}
from '../../locale';

import vaow from 'vaow';

export class AnalysisItem {
  constructor(name, value, nameHint, valueHint) {
    this.validate(name, value);
    this.name = name;
    this.value = this.text = value;
    this.nameHint = nameHint;
    this.valueHint = valueHint;
  }

  validate(name, value) {
    if(!window.vaow.Validator.isDefinedAndNotNull(name)) {
      throw Locale.Error.InvalidArgName;
    }

    if(!window.vaow.Validator.isDefinedAndNotNull(value)) {
      throw Locale.Error.InvalidArgValue;
    }
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
}

export class TimeAnalysisItem extends AnalysisItem {
  constructor(name, seconds, nameHint, valueHint) {
    super(name, seconds, nameHint, valueHint);
    this.setTranslator(window.vaow.TimeTranslator.getInstance());
    this.setTranslationText();
  }
}

export class NumberAnalysisItem extends AnalysisItem {
  constructor(name, number, nameHint, valueHint) {
    super(name, number, nameHint, valueHint);
    this.setTranslator(window.vaow.NumberTranslator.getInstance());
    this.setTranslationText();
  }
}
