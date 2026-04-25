import { describe, it, expect } from 'vitest';
import { add, subtract } from './utils';

describe('工具函数单元测试', () => {
  it('add 函数应正确计算两数之和', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });

  it('subtract 函数应正确计算两数之差', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 5)).toBe(-5);
  });
});
