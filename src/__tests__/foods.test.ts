// src/__tests__/foods.test.ts
// A category named on both the allowed and prohibited lists is "restricted",
// not "prohibited". Before this, CA/FL/NY/OH baked goods rendered "No" because
// "Cream- or custard-filled baked goods" matched the prohibited list.

import { describe, it, expect } from 'vitest';
import { FOODS_BY_SLUG, statusForFood } from '../data/foods';
import { STATES_BY_SLUG } from '../data/states';

const status = (state: string, food: string) =>
  statusForFood(STATES_BY_SLUG[state], FOODS_BY_SLUG[food]);

describe('statusForFood', () => {
  it('both lists match → restricted', () => {
    for (const s of ['california', 'florida', 'new-york', 'ohio']) {
      expect(status(s, 'baked-goods')).toBe('restricted');
    }
    expect(status('ohio', 'coffee-and-tea')).toBe('restricted');
  });

  it('allowed list only → allowed', () => {
    expect(status('texas', 'baked-goods')).toBe('allowed');
    expect(status('california', 'coffee-and-tea')).toBe('allowed');
  });

  it('prohibited list only → prohibited', () => {
    expect(status('florida', 'pickles-and-fermented')).toBe('prohibited');
  });

  it('neither list → unclear', () => {
    expect(status('texas', 'honey')).toBe('unclear');
  });
});
