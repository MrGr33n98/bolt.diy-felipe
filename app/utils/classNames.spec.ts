import { describe, it, expect } from 'vitest';
import { classNames } from './classNames';

describe('classNames', () => {
  it('should include numeric class names', () => {
    const result = classNames('foo', 0, 1, { bar: true, baz: false });
    expect(result).toBe('foo 0 1 bar');
  });
});
