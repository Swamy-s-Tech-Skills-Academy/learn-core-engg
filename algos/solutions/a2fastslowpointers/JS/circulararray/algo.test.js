const { circularArrayLoop } = require('./algo');

test('Cycle exists: [2, 2, 2, 7, 2, -1, 2, -1, -1]', () => {
    expect(circularArrayLoop([2, 2, 2, 7, 2, -1, 2, -1, -1])).toBe(true);
});

test('Cycle exists: [1, 2, -3, 3, 4, 7, 1]', () => {
    expect(circularArrayLoop([1, 2, -3, 3, 4, 7, 1])).toBe(true);
});

test('No cycle: [-5, -4, -3, -2, -1]', () => {
    expect(circularArrayLoop([-5, -4, -3, -2, -1])).toBe(false);
});

test('No cycle: [2, 1, -1, -2]', () => {
    expect(circularArrayLoop([2, 1, -1, -2])).toBe(false);
});

test('Edge case: [-1, -2, -3, -4, -5, 6]', () => {
    expect(circularArrayLoop([-1, -2, -3, -4, -5, 6])).toBe(false);
});
