// src/__tests__/foods.test.ts
// A category named on both the allowed and prohibited lists is "restricted",
// not "prohibited". Before this, CA/FL/NY/OH baked goods rendered "No" because
// "Cream- or custard-filled baked goods" matched the prohibited list.

import { describe, it, expect } from 'vitest';
import { FOODS_BY_SLUG, foodMatches, statusForFood } from '../data/foods';
import { STATES_BY_SLUG } from '../data/states';

const status = (state: string, food: string) =>
  statusForFood(STATES_BY_SLUG[state], FOODS_BY_SLUG[food]);

describe('statusForFood', () => {
  it('both lists match → restricted', () => {
    for (const s of ['california', 'florida', 'new-york']) {
      expect(status(s, 'baked-goods')).toBe('restricted');
    }
  });

  it('allowed list only → allowed', () => {
    expect(status('california', 'coffee-and-tea')).toBe('allowed');
    expect(status('ohio', 'coffee-and-tea')).toBe('allowed');
  });

  it('food_status_overrides win over list matching', () => {
    expect(status('ohio', 'honey')).toBe('restricted');
  });

  it('all-except-prohibited state with no prohibited match → allowed', () => {
    for (const food of ['baked-goods', 'honey', 'coffee-and-tea', 'pickles-and-fermented']) {
      expect(status('texas', food)).toBe('allowed');
    }
  });

  it('prohibited list only → prohibited', () => {
    expect(status('florida', 'pickles-and-fermented')).toBe('prohibited');
  });

  it('neither list → unclear', () => {
    expect(status('new-york', 'honey')).toBe('unclear');
    expect(status('florida', 'coffee-and-tea')).toBe('unclear');
  });

  it('matches terms at word starts only', () => {
    // "Rice Krispies treats" must not count as a pie.
    const ny = foodMatches(STATES_BY_SLUG['new-york'], FOODS_BY_SLUG['baked-goods']);
    expect(ny.allowed.some((i) => i.includes('Krispies'))).toBe(false);
  });
});
