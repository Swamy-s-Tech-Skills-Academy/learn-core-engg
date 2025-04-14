// removeadjduplicates/algo.js

function removeDuplicates(str) {
    let stack = [];
    for (let ch of str) {
        if (stack.length && stack[stack.length - 1] === ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    let result = stack.join('');
    return result === str ? result : removeDuplicates(result); // fix is here
}

module.exports = removeDuplicates;
