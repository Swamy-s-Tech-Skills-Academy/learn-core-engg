// algo.js
function isAlphaNumeric(char) { return /[a-z0-9]/.test(char); }

function isPalindrome(inputString) {
    inputString = inputString.toLowerCase();

    let left = 0, right = inputString.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(inputString[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(inputString[right])) {
            right--;
        }

        if (inputString[left] !== inputString[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

module.exports = { isPalindrome };
