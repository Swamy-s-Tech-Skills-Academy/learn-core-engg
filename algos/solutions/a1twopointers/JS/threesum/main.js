// File: main.js

const { threeSum } = require('./algo');

function main() {
    const testCases = [
        [-1, 0, 1, 2, -1, -4],
        [1, 2, 3, 4, 5],
        [0, 0, 0, 0],
        [-4, -1, -1, 0, 1, 2, 2],
        [-10, -7, -3, -1, 0, 3, 7, 10],
        [-3, -5, -7, -9]
    ];

    testCases.forEach((nums, idx) => {
        console.log(`\nTest Case ${idx + 1}:`);
        console.log(`Input: [${nums.join(", ")}]`);
        const result = threeSum(nums);
        const formattedResult = result.map(triplet => `[${triplet.join(", ")}]`).join(", ");
        console.log(`Output: [${formattedResult}]`);
        console.log("-".repeat(100));
    });
}

main();
