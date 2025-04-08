// happynumber/helper_happynumber.js

function showHappyNumberDemo(isHappyNumber) {
    console.log("========== Happy Number Demonstration ==========");

    const testCases = [1, 7, 10, 19, 23, 28, 2, 3, 4, 20, 21, 22];

    testCases.forEach((num, index) => {
        console.log(`\nTest Case #${index + 1}`);
        console.log("-".repeat(60));
        console.log(`Input Number: ${num}`);
        console.log(`Is Happy? → ${isHappyNumber(num)}`);
        console.log("-".repeat(60));
    });
}

module.exports = { showHappyNumberDemo };
