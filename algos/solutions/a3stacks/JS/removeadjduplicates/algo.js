// removeadjduplicates/algo.js

function removeDuplicates(s) {
    let changed = true;

    while (changed) {
        changed = false;
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
                stack.pop();
                changed = true;
            } else {
                stack.push(s[i]);
            }
        }

        s = stack.join("");
    }

    return s;
}

module.exports = removeDuplicates;
