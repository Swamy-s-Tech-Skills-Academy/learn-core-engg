// algo.js
export function calcFunc(expression) {
    let number = 0;
    let operations_stack = [];
    let result = 0;
    let signValue = 1;
    const length = expression.length;

    for (let i = 0; i < length; i++) {
        const c = expression[i];

        if (c === ' ') continue;

        if (!isNaN(parseInt(c))) {
            number = number * 10 + parseInt(c);
        } else if (c === '+' || c === '-') {
            result += number * signValue;
            signValue = c === '-' ? -1 : 1;
            number = 0;
        } else if (c === '(') {
            operations_stack.push(result);
            operations_stack.push(signValue);
            result = 0;
            signValue = 1;
        } else if (c === ')') {
            result += signValue * number;
            number = 0;
            const prevSign = operations_stack.pop();
            const prevResult = operations_stack.pop();
            result = prevResult + prevSign * result;
        }
    }

    return result + number * signValue;
}
