import { sum, hello } from '../src/index';

describe('hello', () => {
  it('should greet by name', () => {
    expect(hello('World')).toBe('Hello, World!');
  });
});

describe('sum', () => {
  it('should add positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should handle zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
