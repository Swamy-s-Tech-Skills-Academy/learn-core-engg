// removeadjduplicates/algo.test.js

const removeDuplicates = require('./algo');

test("removeDuplicates('g') should return 'g'", () => {
    expect(removeDuplicates('g')).toBe('g');
});

test("removeDuplicates('ggaabcdeb') should return 'cdeb'", () => {
    expect(removeDuplicates('ggaabcdeb')).toBe('cdeb');
});

test("removeDuplicates('abbddaccaaabcd') should return 'bcd'", () => {
    expect(removeDuplicates('abbddaccaaabcd')).toBe('bcd');
});

test("removeDuplicates('aannkwwwkkkwna') should return ''", () => {
    expect(removeDuplicates('aannkwwwkkkwna')).toBe('');
});

test("removeDuplicates('abbabccblkklu') should return 'aau'", () => {
    expect(removeDuplicates('abbabccblkklu')).toBe('aau');
});
