// removeadjduplicates/algo.js

function removeDuplicates(s) {
    const stack = [];

    for (const ch of s) {
        if (stack.length > 0 && stack[stack.length - 1] === ch) {
            // Found a duplicate, pop it
            stack.pop();
        } else {
            // No duplicate, push it
            stack.push(ch);
        }
    }

    // Join the stack to form the resulting string
    return stack.join('');
}

module.exports = removeDuplicates;
