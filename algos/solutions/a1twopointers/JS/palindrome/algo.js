// algo.js
function isPalindrome(inputString) {
    inputString = inputString.toLowerCase();

    let left = 0, right = inputString.length - 1;

    while (left < right) {
        if (inputString[left] !== inputString[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

module.exports = { isPalindrome };
