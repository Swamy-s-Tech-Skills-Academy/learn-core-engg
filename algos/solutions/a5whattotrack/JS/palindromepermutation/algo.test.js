// palindromepermutation/algo.test.js

const { permutePalindrome } = require('./algo');

describe('Palindrome Permutation', () => {
  test('Example 1', () => {
    expect(permutePalindrome("baefeab")).toBe(true);
  });

  test('Example 2', () => {
    expect(permutePalindrome("abc")).toBe(false);
  });

  test('Example 3', () => {
    expect(permutePalindrome("xzz")).toBe(true);  // Updated to true since "xzz" can be rearranged to "zxz"
  });

  test('Example 4', () => {
    expect(permutePalindrome("jjadd")).toBe(true);
  });

  test('Example 5', () => {
    expect(permutePalindrome("kllk")).toBe(true);
  });

  test('Empty string', () => {
    expect(permutePalindrome("")).toBe(true);
  });

  test('Single character', () => {
    expect(permutePalindrome("a")).toBe(true);
  });

  test('Long palindrome permutation', () => {
    expect(permutePalindrome("aabbccddeeffgghhiijj")).toBe(true);
  });

  test('Long non-palindrome permutation', () => {
    expect(permutePalindrome("aabbccddeeffgghhiijk")).toBe(false);
  });
});