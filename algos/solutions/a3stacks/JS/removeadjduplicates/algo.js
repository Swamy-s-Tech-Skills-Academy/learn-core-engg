// removeadjduplicates/algo.js

function removeDuplicates(s) {
    const stack = [];

    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

module.exports = removeDuplicates;
