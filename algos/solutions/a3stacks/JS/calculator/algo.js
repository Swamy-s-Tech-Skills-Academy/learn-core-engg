// calculator/algo.js

function calculator(expression) {
    let i, number = 0, result = 0, signValue = 1;
    const operations_stack = [];
    const length = expression.length;

    for (i = 0; i < length; i++) {
        const c = expression[i];

        if (c === ' ') continue;

        if (!isNaN(parseInt(c))) {
            number = number * 10 + parseInt(c);
        } else if (c === '+' || c === '-') {
            result += number * signValue;
            signValue = (c === '-') ? -1 : 1;
            number = 0;
        } else if (c === '(') {
            operations_stack.push(result);
            operations_stack.push(signValue);
            result = 0;
            signValue = 1;
        } else if (c === ')') {
            result += number * signValue;
            const prevSign = operations_stack.pop();
            result *= prevSign;
            const prevResult = operations_stack.pop();
            result += prevResult;
            number = 0;
        }
    }

    return result + number * signValue;
}

module.exports = { calculator };
