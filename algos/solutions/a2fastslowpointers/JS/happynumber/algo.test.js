// happynumber/algo.test.js

const { isHappyNumber } = require('./algo');

test('should return true for a happy number: 19', () => {
    expect(isHappyNumber(19)).toBe(true);
});

test('should return false for an unhappy number: 2', () => {
    expect(isHappyNumber(2)).toBe(false);
});

test('should return true for a happy number: 7', () => {
    expect(isHappyNumber(7)).toBe(true);
});

test('should return false for an unhappy number: 4', () => {
    expect(isHappyNumber(4)).toBe(false);
});

test('should return true for 1 (trivially happy)', () => {
    expect(isHappyNumber(1)).toBe(true);
});
