/**
 * @jest-environment jsdom
 */

const is = require('./is');

describe('is.wechat', () => {
  it('should return false', () => {
    expect(is.wechat()).toBe(false);
  });
});

describe('is.ios', () => {
  it('should return false', () => {
    expect(is.ios()).toBe(false);
  });
});
