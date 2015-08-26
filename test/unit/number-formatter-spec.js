import {
  NumberFormatter
}
from '../../src/services/formatters/number-formatter';

import {
  NumberMagnitude
}
from '../../src/services/formatters/magnitude-constants';

let formatter = null;

beforeEach(() => {
  formatter = new NumberFormatter.getInstance();
});

describe('the NumberFormatter module', () => {
  it('handles null input', () => {
    expect(x => formatter.getFormattedText(null)).toThrow();
  });

  it('handles string input', () => {
    expect(x => formatter.getFormattedText("a")).toThrow();
  });

  it('formats 100', () => {
    expect(formatter.getFormattedText(100)).toBe('100');
  });

  it('formats 100 thousand', () => {
    expect(formatter.getFormattedText(100 * 1000)).toBe('100,000');
  });

  it('formats a million', () => {
    let value = NumberMagnitude.Million.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 million');
  });

  it('formats a billion', () => {
    let value = NumberMagnitude.Billion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 billion');
  });

  it('formats a trillion', () => {
    let value = NumberMagnitude.Trillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 trillion');
  });

  it('formats a quadrillion', () => {
    let value = NumberMagnitude.Quadrillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 quadrillion');
  });

  it('formats a quintillion', () => {
    let value = NumberMagnitude.Quintillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 quintillion');
  });

  it('formats a sextillion', () => {
    let value = NumberMagnitude.Sextillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 sextillion');
  });

  it('formats a septillion', () => {
    let value = NumberMagnitude.Septillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 septillion');
  });

  it('formats a octillion', () => {
    let value = NumberMagnitude.Octillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 octillion');
  });

  it('formats a nonillion', () => {
    let value = NumberMagnitude.Nonillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 nonillion');
  });

  it('formats a decillion', () => {
    let value = NumberMagnitude.Decillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 decillion');
  });

  it('formats an undecillion', () => {
    let value = NumberMagnitude.Undecillion.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 undecillion');
  });
});
