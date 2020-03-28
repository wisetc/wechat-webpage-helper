const { getValue, putQuery } = require('./qs');

describe('getValue', () => {
  test('28', () => {
    expect(getValue('28', 'signType')).toBe(undefined);
  });

  test('28?', () => {
    expect(getValue('28?', 'signType')).toBe(undefined);
  });

  test('28?signType', () => {
    expect(getValue('28?signType', 'signType')).toBe('');
  });

  test('28?signType=CHANGE', () => {
    expect(getValue('28?signType=CHANGE', 'signType')).toBe('CHANGE');
  });

  test('28?signType=CHANGE&', () => {
    expect(getValue('28?signType=CHANGE&', 'signType')).toBe('CHANGE');
  });

  test('28?signType=CHANGE&a=1', () => {
    expect(getValue('28?signType=CHANGE&a=1', 'signType')).toBe('CHANGE');
  });

  test('http://example.com/webapp/?code=somerandomcode&state=#/contracts/thecontractid?signType=CHANGE&a=1', () => {
    expect(
      getValue(
        'http://example.com/webapp/?code=somerandomcode&state=#/contracts/thecontractid?signType=CHANGE&a=1',
        'signType'
      )
    ).toBe('CHANGE');
  });
});

describe('putQuery', () => {
  test('28', () => {
    expect(putQuery('28', 'signType')).toBe('28?signType');
  });
  test('28 sigType NEW', () => {
    expect(putQuery('28', 'signType=NEW')).toBe('28?signType=NEW');
  });
  test('28?a=x', () => {
    expect(putQuery('28?a=x', 'signType')).toBe('28?a=x&signType');
  });
  test('28?a=x signType NEW', () => {
    expect(putQuery('28?a=x', 'signType=NEW')).toBe('28?a=x&signType=NEW');
  });
});
