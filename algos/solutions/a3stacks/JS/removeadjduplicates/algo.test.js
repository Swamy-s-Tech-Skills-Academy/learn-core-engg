// removeadjduplicates/algo.test.js

const removeDuplicates = require('./algo');

test("removeDuplicates('g') should return 'g'", () => {
    expect(removeDuplicates('g')).toBe('g');
});

test("removeDuplicates('ggaabcdeb') should return 'bcdeb'", () => {
    expect(removeDuplicates('ggaabcdeb')).toBe('bcdeb');
});

test("removeDuplicates('abbddaccaaabcd') should return 'abcd'", () => {
    expect(removeDuplicates('abbddaccaaabcd')).toBe('abcd');
});

test("removeDuplicates('aannkwwwkkkwna') should return 'kwkwna'", () => {
    expect(removeDuplicates('aannkwwwkkkwna')).toBe('kwkwna');
});

test("removeDuplicates('abbabccblkklu') should return 'u'", () => {
    expect(removeDuplicates('abbabccblkklu')).toBe('u');
});
