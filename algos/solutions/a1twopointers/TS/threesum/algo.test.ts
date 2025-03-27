import { threeSum } from "./algo";

// Helper function to sort triplets for consistent comparison.
function sortTriplets(triplets: number[][]): number[][] {
    return triplets
        .map(triplet => triplet.slice().sort((a, b) => a - b))
        .sort((a, b) => {
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return a[i] - b[i];
            }
            return 0;
        });
}

describe("threeSum", () => {
    test("should return all unique triplets that sum to zero", () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        const expected = [[-1, -1, 2], [-1, 0, 1]];
        const result = threeSum(nums);
        expect(sortTriplets(result)).toEqual(sortTriplets(expected));
    });

    test("should return an empty array when no triplet sums to zero", () => {
        const nums = [1, 2, 3, 4, 5];
        expect(threeSum(nums)).toEqual([]);
    });

    test("should handle cases with multiple zeros", () => {
        const nums = [0, 0, 0, 0];
        const expected = [[0, 0, 0]];
        expect(threeSum(nums)).toEqual(expected);
    });
});
