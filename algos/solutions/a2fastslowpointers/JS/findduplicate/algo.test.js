// findduplicate/algo.test.js

const { findDuplicate } = require("./algo");

test('Duplicate in [1, 3, 2, 3, 5, 4] is 3', () => {
    expect(findDuplicate([1, 3, 2, 3, 5, 4])).toBe(3);
});

test('Duplicate in [2, 4, 5, 4, 1, 3] is 4', () => {
    expect(findDuplicate([2, 4, 5, 4, 1, 3])).toBe(4);
});

test('Duplicate in [1, 6, 3, 5, 1, 2, 7, 4] is 1', () => {
    expect(findDuplicate([1, 6, 3, 5, 1, 2, 7, 4])).toBe(1);
});

test('Duplicate in [1, 2, 2, 4, 3] is 2', () => {
    expect(findDuplicate([1, 2, 2, 4, 3])).toBe(2);
});

test('Duplicate in [3, 1, 3, 5, 6, 4, 2] is 3', () => {
    expect(findDuplicate([3, 1, 3, 5, 6, 4, 2])).toBe(3);
});
