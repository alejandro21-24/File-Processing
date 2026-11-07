const {
  countWords,
  findLongestWord,
  countLines,
} = require('../src/textAnalyzer');

describe('countWords', () => {
  test('counts words in a normal sentence', () => {
    expect(countWords('Hello world test')).toBe(3);
  });

  test('counts a single word', () => {
    expect(countWords('Hello')).toBe(1);
  });

  test('returns 0 for empty text', () => {
    expect(countWords('')).toBe(0);
  });

  test('returns 0 for whitespace-only text', () => {
    expect(countWords('   \n  ')).toBe(0);
  });

  test('ignores extra spaces between words', () => {
    expect(countWords('  Hello    world  ')).toBe(2);
  });

  test('counts words across multiple lines', () => {
    expect(countWords('one two\nthree four\nfive')).toBe(5);
  });
});

describe('findLongestWord', () => {
  test('finds the longest word in a sentence', () => {
    expect(findLongestWord('The quick brown fox jumped')).toBe('jumped');
  });

  test('works with a single word', () => {
    expect(findLongestWord('Hello')).toBe('Hello');
  });

  test('returns empty string for empty text', () => {
    expect(findLongestWord('')).toBe('');
  });

  test('ignores punctuation when measuring words', () => {
    expect(findLongestWord('Hi, wonderful! ok.')).toBe('wonderful');
  });

  test('returns the first word when there is a tie', () => {
    expect(findLongestWord('cat dog')).toBe('cat');
  });
});

describe('countLines', () => {
  test('counts lines in multi-line text', () => {
    expect(countLines('line one\nline two\nline three')).toBe(3);
  });

  test('counts a single line', () => {
    expect(countLines('just one line')).toBe(1);
  });

  test('returns 0 for empty text', () => {
    expect(countLines('')).toBe(0);
  });

  test('does not count a trailing newline as an extra line', () => {
    expect(countLines('a\nb\n')).toBe(2);
  });

  test('counts blank lines in the middle', () => {
    expect(countLines('a\n\nb')).toBe(3);
  });

  test('handles Windows line endings', () => {
    expect(countLines('a\r\nb\r\nc')).toBe(3);
  });
});