// calculator/algo.test.js

const { calculator } = require('./algo');

test('4 + (52 - 12) + 99 = 143', () => {
    expect(calculator("4 + (52 - 12) + 99")).toBe(143);
});

test('(31 + 7) - (5 - 2) = 35', () => {
    expect(calculator("(31 + 7) - (5 - 2)")).toBe(35);
});

test('(12 - 9 + 4) + ( 7 - 5) = 9', () => {
    expect(calculator("(12 - 9 + 4) + ( 7 - 5)")).toBe(9);
});

test('8 - 5 + (19 - 11) + 6 + (10 + 3) = 30', () => {
    expect(calculator("8 - 5 + (19 - 11) + 6 + (10 + 3)")).toBe(30);
});

test('56 - 44 - (27 - 17 - 1) + 7 = 10', () => {
    expect(calculator("56 - 44 - (27 - 17 - 1) + 7")).toBe(10);
});
