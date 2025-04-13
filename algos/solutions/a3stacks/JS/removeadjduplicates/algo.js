// removeadjduplicates/algo.js

function removeDuplicates(s) {
    let stack = [];

    for (let c of s) {
        if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }

    // Convert stack to string
    let result = stack.join("");

    // Check if further passes are needed
    let i = 0;
    while (i < result.length - 1) {
        if (result[i] === result[i + 1]) {
            return removeDuplicates(result.slice(0, i) + result.slice(i + 2));
        }
        i++;
    }

    return result;
}

module.exports = removeDuplicates;
