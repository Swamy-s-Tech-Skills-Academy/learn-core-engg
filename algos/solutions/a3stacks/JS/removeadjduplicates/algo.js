// removeadjduplicates/algo.js

function removeDuplicates(s) {
    // Initialize a stack to keep track of characters
    let stack = [];

    // Iterate through each character in the string
    for (let c of s) {
        // If the stack is not empty and the top of the stack matches the current character, pop it
        if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            // Otherwise, push the current character onto the stack
            stack.push(c);
        }
    }

    // Join the stack to form the resulting string
    const result = stack.join("");

    // If the resulting string is the same as the input, return it (no further duplicates to remove)
    // Otherwise, recursively call the function to handle further passes
    return result === s ? result : removeDuplicates(result);
}

module.exports = removeDuplicates;
