// algo.test.js
const { isPalindrome } = require('./algo');

test("should return true for palindrome 'ABCBA'", () => {
    expect(isPalindrome("ABCBA")).toBe(true);
});

test("should return true for palindrome 'ABBA'", () => {
    expect(isPalindrome("ABBA")).toBe(true);
});

test("should return false for non-palindrome 'ABCDE'", () => {
    expect(isPalindrome("ABCDE")).toBe(false);
});

test("should return true for a single character 'A'", () => {
    expect(isPalindrome("A")).toBe(true);
});

test("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
});
