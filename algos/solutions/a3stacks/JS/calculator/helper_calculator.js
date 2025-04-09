// helper_calculator.js
const { calcFunc } = require('./algo');

export function runCalculatorExamples() {
    const input = [
        "4 + (52 - 12) + 99",
        "(31 + 7) - (5 - 2)",
        "(12 - 9 + 4) + ( 7 - 5)",
        "8 - 5 + (19 - 11) + 6 + (10 + 3)",
        "56 - 44 - (27 - 17 - 1) + 7"
    ];

    input.forEach((expression, index) => {
        console.log(`${index + 1}. Given Expression: ${expression}`);
        console.log(`   The result is: ${calcFunc(expression)}`);
        console.log('-'.repeat(100));
    });
}
