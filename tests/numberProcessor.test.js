const {
  sumNumbers,
  findHighest,
  findLowest,
  calculateAverage,
} = require('../src/numberProcessor');

describe('sumNumbers', () => {
  test('sums positive numbers', () => {
    expect(sumNumbers([1, 2, 3, 4])).toBe(10);
  });

  test('sums negative numbers', () => {
    expect(sumNumbers([-1, -2, -3])).toBe(-6);
  });

  test('sums mixed numbers', () => {
    expect(sumNumbers([10, -4, 2.5])).toBe(8.5);
  });

  test('returns 0 for an empty array', () => {
    expect(sumNumbers([])).toBe(0);
  });

  test('works with a single number', () => {
    expect(sumNumbers([7])).toBe(7);
  });
});

describe('findHighest', () => {
  test('finds the highest number', () => {
    expect(findHighest([5, 10, 3, 8])).toBe(10);
  });

  test('works with negative numbers', () => {
    expect(findHighest([-5, -10, -3, -8])).toBe(-3);
  });

  test('works with a single number', () => {
    expect(findHighest([42])).toBe(42);
  });

  test('returns null for an empty array', () => {
    expect(findHighest([])).toBeNull();
  });
});

describe('findLowest', () => {
  test('finds the lowest number', () => {
    expect(findLowest([5, 10, 3, 8])).toBe(3);
  });

  test('works with negative numbers', () => {
    expect(findLowest([-5, -10, -3, -8])).toBe(-10);
  });

  test('works with a single number', () => {
    expect(findLowest([42])).toBe(42);
  });

  test('returns null for an empty array', () => {
    expect(findLowest([])).toBeNull();
  });
});

describe('calculateAverage', () => {
  test('calculates the average of numbers', () => {
    expect(calculateAverage([80, 90, 70])).toBe(80);
  });

  test('calculates an average with decimals', () => {
    expect(calculateAverage([85, 95, 90, 80])).toBe(87.5);
  });

  test('works with a single number', () => {
    expect(calculateAverage([5])).toBe(5);
  });

  test('works with negative numbers', () => {
    expect(calculateAverage([-2, 2])).toBe(0);
  });

  test('returns 0 for an empty array', () => {
    expect(calculateAverage([])).toBe(0);
  });
});