// File: alog.test.js

const { threeSum } = require('./algo');

test("3Sum returns all unique triplets that sum to zero", () => {
    const nums = [-1, 0, 1, 2, -1, -4]; const expected = [[-1, -1, 2], [-1, 0, 1]];
    const result = threeSum(nums);
    expect(sortTriplets(result)).toEqual(sortTriplets(expected));
});

test("3Sum returns an empty array when no triplet sums to zero", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(threeSum(nums)).toEqual([]);
});