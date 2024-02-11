import {inRange} from '../';

describe('@bitfiber/utils/num/inRange', () => {
  it('Integer value', () => {
    expect(inRange(10)).toBe(10);
    expect(inRange(10, {min: 20})).toBe(20);
    expect(inRange(100, {max: 50})).toBe(50);
    expect(inRange(10, {
      min: 20,
      max: 50,
    })).toBe(20);
    expect(inRange(100, {
      min: 20,
      max: 50,
    })).toBe(50);
  });

  it('Float value', () => {
    expect(inRange(10.11, {precision: 0})).toBe(10);
    expect(inRange(-10.11, {precision: 0})).toBe(-10);
    expect(inRange(10.11, {precision: 1})).toBe(10.1);
    expect(inRange(-10.11, {precision: 1})).toBe(-10.1);
  });

  it('undefined or null', () => {
    expect(inRange(undefined, {min: 1})).toBe(null);
    expect(inRange(null, {min: 1})).toBe(null);
    expect(inRange(undefined, {required: true})).toBe(0);
    expect(inRange(null, {required: true})).toBe(0);
    expect(inRange(undefined, {
      required: true,
      max: -1,
    })).toBe(-1);
    expect(inRange(null, {
      required: true,
      max: -1,
    })).toBe(-1);
    expect(inRange(undefined, {
      required: true,
      min: -3,
      max: -1,
    })).toBe(-3);
    expect(inRange(null, {
      required: true,
      min: -3,
      max: -1,
    })).toBe(-3);
    expect(inRange(undefined, {
      required: true,
      min: 1,
    })).toBe(1);
    expect(inRange(null, {
      required: true,
      min: 1,
    })).toBe(1);
  });
});
