// calculator/helper_calculator.js

function showCalculatorDemo(calculator) {
    console.log("========== Basic Calculator Demonstration ==========");

    const expressions = [
        "4 + (52 - 12) + 99",
        "(31 + 7) - (5 - 2)",
        "(12 - 9 + 4) + ( 7 - 5)",
        "8 - 5 + (19 - 11) + 6 + (10 + 3)",
        "56 - 44 - (27 - 17 - 1) + 7"
    ];

    expressions.forEach((expr, index) => {
        console.log(`\nTest Case #${index + 1}`);
        console.log("-".repeat(60));
        console.log(`Expression: ${expr}`);
        console.log(`Result    : ${calculator(expr)}`);
        console.log("-".repeat(60));
    });
}

module.exports = { showCalculatorDemo };
