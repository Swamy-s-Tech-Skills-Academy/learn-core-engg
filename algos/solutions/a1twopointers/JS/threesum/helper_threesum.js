// helper_threesum.js

function showThreeSumDemo(threeSum) {
    console.log("\n****************************** Three Sum Tests ******************************");
    const testCases = [
        { input: [-1, 0, 1, 2, -1, -4], description: "Example 1" },
        { input: [1, 2, 3, 4, 5], description: "Example 2 (No triplet)" },
        { input: [0, 0, 0, 0], description: "Example 3 (Multiple zeros)" }
    ];

    testCases.forEach(({ input, description }, index) => {
        const result = threeSum(input);
        console.log(`\nTest Case #${index + 1} - ${description}`);
        console.log("-".repeat(80));
        console.log(`Input: [${input.join(", ")}]`);
        console.log(`Output: ${JSON.stringify(result)}`);
        console.log("-".repeat(80));
    });
}

module.exports = { showThreeSumDemo };
