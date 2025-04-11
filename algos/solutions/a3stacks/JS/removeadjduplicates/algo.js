// removeadjduplicates/algo.js

function removeDuplicates(s) {
    let prev = null;

    // Keep simplifying until nothing changes
    while (s !== prev) {
        prev = s;
        let stack = [];

        for (let c of s) {
            if (stack.length > 0 && stack[stack.length - 1] === c) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        s = stack.join("");
    }

    return s;
}

module.exports = removeDuplicates;
