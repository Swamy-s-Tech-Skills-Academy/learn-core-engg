// calculator/algo.test.js

const { calculator } = require('./algo');

describe('Calculator Tests', () => {
    test("calculator('4 + (52 - 12) + 99') should return 143", () => {
        expect(calculator('4 + (52 - 12) + 99')).toBe(143);
    });

    test("calculator('(31 + 7) - (5 - 2)') should return 35", () => {
        expect(calculator('(31 + 7) - (5 - 2)')).toBe(35);
    });

    test("calculator('(12 - 9 + 4) + (7 - 5)') should return 9", () => {
        expect(calculator('(12 - 9 + 4) + (7 - 5)')).toBe(9);
    });

    test("calculator('8 - 5 + (19 - 11) + 6 + (10 + 3)') should return 30", () => {
        expect(calculator('8 - 5 + (19 - 11) + 6 + (10 + 3)')).toBe(30);
    });

    test("calculator('56 - 44 - (27 - 17 - 1) + 7') should return 10", () => {
        expect(calculator('56 - 44 - (27 - 17 - 1) + 7')).toBe(10);
    });
});
