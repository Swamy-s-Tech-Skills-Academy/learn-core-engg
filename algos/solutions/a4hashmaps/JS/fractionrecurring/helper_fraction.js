// fractionrecurring/helper_fraction.js
function showFractionDemo(fractionToDecimal) {
    console.log("========== Fraction to Recurring Decimal ==========");

    const inputs = [
        [0, 4],
        [4, 2],
        [5, 333],
        [2, 3],
        [47, 18],
        [93, 7],
        [-5, 333],
        [47, -18],
        [-4, -2],
    ];

    inputs.forEach((input, i) => {
        const [numerator, denominator] = input;
        const result = fractionToDecimal(numerator, denominator);
        console.log(`\n${i + 1}. Input: ${numerator}/${denominator}`);
        console.log("   Output:", result);
        console.log("-".repeat(60));
    });
}

module.exports = { showFractionDemo };
