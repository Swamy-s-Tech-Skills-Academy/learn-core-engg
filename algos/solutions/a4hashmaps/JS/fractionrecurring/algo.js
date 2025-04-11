// fractionrecurring/algo.js

function fractionToDecimal(numerator, denominator) {
    let result = "", remainderMap = {};

    if (numerator === 0) return "0";

    // Handle negative results
    if ((numerator < 0) ^ (denominator < 0)) {
        result += "-";
    }

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    const integerPart = Math.floor(numerator / denominator);
    result += integerPart.toString();

    let remainder = numerator % denominator;
    if (remainder === 0) return result;

    result += ".";
    remainder *= 10;

    while (remainder !== 0) {
        if (remainderMap[remainder] !== undefined) {
            const index = remainderMap[remainder];
            result = result.slice(0, index) + "(" + result.slice(index) + ")";
            return result;
        }

        remainderMap[remainder] = result.length;
        const digit = Math.floor(remainder / denominator);
        result += digit.toString();
        remainder = (remainder % denominator) * 10;
    }

    return result;
}

module.exports = { fractionToDecimal };
