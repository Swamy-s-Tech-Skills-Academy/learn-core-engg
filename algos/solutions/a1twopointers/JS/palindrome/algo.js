// algo.js
function isPalindrome(inputString) {
    const sanitized = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0, right = sanitized.length - 1;

    while (left < right) {
        if (sanitized[left] !== sanitized[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

module.exports = { isPalindrome };
