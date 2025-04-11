// removeadjduplicates/algo.test.js

const removeDuplicates = require('./algo');

test("removeDuplicates('g') should return 'g'", () => {
    expect(removeDuplicates('g')).toBe('g');
});

test("removeDuplicates('ggaabcdeb') should return 'bcdeb'", () => {
    expect(removeDuplicates('ggaabcdeb')).toBe('bcdeb');
});

test("removeDuplicates('abbddaccaaabcd') should return 'bcd'", () => {
    expect(removeDuplicates('abbddaccaaabcd')).toBe('bcd');
});

test("removeDuplicates('aannkwwwkkkwna') should return ''", () => {
    expect(removeDuplicates('aannkwwwkkkwna')).toBe('');
});

test("removeDuplicates('abbabccblkklu') should return 'u'", () => {
    expect(removeDuplicates('abbabccblkklu')).toBe('u');
});
