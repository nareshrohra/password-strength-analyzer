import {
  TimeFormatter
}
from '../../src/services/formatters/time-formatter';

import {
  TimeMagnitude, NumberMagnitude
}
from '../../src/services/formatters/magnitude-constants';

let formatter = null;

beforeEach(() => {
  formatter = new TimeFormatter.getInstance();
});

describe('the TimeFormatter module', () => {
  it('handles null input', () => {
    expect(x => formatter.getFormattedText(null)).toThrow();
  });

  it('handles string input', () => {
    expect(x => formatter.getFormattedText("a")).toThrow();
  });

  it('formats 30 seconds', () => {
    expect(formatter.getFormattedText(30)).toBe('30 seconds');
  });

  it('formats a minute', () => {
    let value = TimeMagnitude.Minute.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 minutes');
  });

  it('formats an hour', () => {
    let value = TimeMagnitude.Hour.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 hours');
  });

  it('formats a day', () => {
    let value = TimeMagnitude.Day.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 days');
  });

  it('formats a month', () => {
    let value = TimeMagnitude.Month.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 months');
  });

  it('formats a year', () => {
    let value = TimeMagnitude.Year.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 years');
  });

  it('formats a decade', () => {
    let value = TimeMagnitude.Decade.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 decades');
  });

  it('formats a century', () => {
    let value = TimeMagnitude.Century.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 centuries');
  });

  it('formats a million centuries', () => {
    let value = NumberMagnitude.Million.getValue() * TimeMagnitude.Century.getValue();
    expect(formatter.getFormattedText(value)).toBe('1 million centuries');
  });

  it('formats 100 million centuries', () => {
    let value = 100 * NumberMagnitude.Million.getValue() * TimeMagnitude.Century.getValue();
    expect(formatter.getFormattedText(value)).toBe('100 million centuries');
  });
});
