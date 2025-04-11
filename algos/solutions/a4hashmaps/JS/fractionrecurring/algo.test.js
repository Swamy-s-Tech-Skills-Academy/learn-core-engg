// fractionrecurring/algo.test.js

const { fractionToDecimal } = require('./algo');

test("0/4 should be '0'", () => {
    expect(fractionToDecimal(0, 4)).toBe("0");
});

test("4/2 should be '2'", () => {
    expect(fractionToDecimal(4, 2)).toBe("2");
});

test("5/333 should be '0.(015)'", () => {
    expect(fractionToDecimal(5, 333)).toBe("0.(015)");
});

test("2/3 should be '0.(6)'", () => {
    expect(fractionToDecimal(2, 3)).toBe("0.(6)");
});

test("47/18 should be '2.6(1)'", () => {
    expect(fractionToDecimal(47, 18)).toBe("2.6(1)");
});

test("93/7 should be '13.(285714)'", () => {
    expect(fractionToDecimal(93, 7)).toBe("13.(285714)");
});

test("-5/333 should be '-0.(015)'", () => {
    expect(fractionToDecimal(-5, 333)).toBe("-0.(015)");
});

test("47/-18 should be '-2.6(1)'", () => {
    expect(fractionToDecimal(47, -18)).toBe("-2.6(1)");
});

test("-4/-2 should be '2'", () => {
    expect(fractionToDecimal(-4, -2)).toBe("2");
});
