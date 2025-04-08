function showCircularArrayLoopDemo(circularArrayLoop) {
    const testCases = [
        [-2, -3, -9],
        [-5, -4, -3, -2, -1],
        [-1, -2, -3, -4, -5],
        [2, 1, -1, -2],
        [-1, -2, -3, -4, -5, 6],
        [1, 2, -3, 3, 4, 7, 1],
        [2, 2, 2, 7, 2, -1, 2, -1, -1]
    ];

    console.log("========== Circular Array Loop Tests ==========");

    testCases.forEach((arr, index) => {
        console.log(`\nTest Case #${index + 1}`);
        console.log("-".repeat(80));
        console.log(`Input: ${JSON.stringify(arr)} (length: ${arr.length})`);
        const result = circularArrayLoop(arr);
        console.log(`Has Cycle? → ${result}`);
        console.log("-".repeat(80));
    });
}

module.exports = {
    showCircularArrayLoopDemo
};
