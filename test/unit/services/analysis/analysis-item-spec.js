import {
  Locale
}
from '../../../../src/locale';

import {
  AnalysisItem, TimeAnalysisItem, NumberAnalysisItem
}
from '../../../../src/services/analysis/analysis-item';

let translator;

function TestTranslator() {
  this.translate = function(value) {
    return value;
  };
}

beforeEach(function() {
  translator = new TestTranslator();
});

describe('the AnalysisItem class', () => {
  it('handles null value for name parameter', () => {
    let name = null, value = 5,
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    expect(x => new AnalysisItem(name, value, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles undefined value for name parameter', () => {
    let name = {}, value = 5,
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    expect(x => new AnalysisItem(name.notDefined, value, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles null value for value parameter', () => {
    let name = 'score', value = null,
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    expect(x => new AnalysisItem(name, value, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgValue);
  });

  it('handles undefined value for value parameter', () => {
    let name = 'score', value = {},
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    expect(x => new AnalysisItem(name, value.notDefined, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgValue);
  });

  it('gets name', () => {
    let name = 'score', value = 5,
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    let score = new AnalysisItem(name, value, nameHint, valueHint);
    expect(score.getName()).toBe(name);
  });

  it('gets value', () => {
    let name = 'score', value = 5,
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    let score = new AnalysisItem(name, value, nameHint, valueHint);
    score.setTranslator(translator)
    expect(score.getText()).toBe(value);
  });

  it('gets nameHint', () => {
    let name = 'score', value = 5,
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    let score = new AnalysisItem(name, value, nameHint, valueHint);
    expect(score.getNameHint()).toBe(nameHint);
  });

  it('gets valueHint', () => {
    let name = 'score', value = 5,
      nameHint = 'Score between 1 to 5',
      valueHint = 'Excellent';
    let score = new AnalysisItem(name, value, nameHint, valueHint);
    expect(score.getTextHint()).toBe(valueHint);
  });
});

describe('the NumberAnalysisItem class', () => {
  it('handles null value for name parameter', () => {
    let name = null, value = 26,
      nameHint = 'Total guesses to make',
      valueHint = 'Not enough';
    expect(x => new NumberAnalysisItem(name, value, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles undefined value for name parameter', () => {
    let name = {}, value = 26,
      nameHint = 'Total guesses to make',
      valueHint = 'Not enough';
    expect(x => new NumberAnalysisItem(name.notDefined, value, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgName);
  });

  it('handles null value for value parameter', () => {
    let name = 'Search space', value = null,
      nameHint = 'Total guesses to make',
      valueHint = 'Not enough';
    expect(x => new NumberAnalysisItem(name, value, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgValue);
  });

  it('handles undefined value for value parameter', () => {
    let name = 'Search space', value = {},
      nameHint = 'Total guesses to make',
      valueHint = 'Not enough';
    expect(x => new NumberAnalysisItem(name, value.notDefined, nameHint, valueHint)).toThrow(Locale.Error.InvalidArgValue);
  });

  it('translates a minute', () => {
    let name = 'crack time', value = Math.pow(10, 6),
      nameHint = 'Total guesses to make',
      valueHint = 'Still not enough';
    let crackTime = new NumberAnalysisItem(name, value, nameHint, valueHint);
    expect(crackTime.getText()).toBe('1 million');
  });
});
