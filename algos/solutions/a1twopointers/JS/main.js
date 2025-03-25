// Import functions from each module
const { isPalindrome } = require("./palindrome/algo");
const { ListNode, removeNthFromEnd } = require("./removenthfromend/algo");
const { threeSum } = require("./threesum/algo");

// Import helper test functions from separate files
const { showValidPalindromeDemo } = require("./palindrome/helper_palindrome");
const { showRemoveNthNodeDemo } = require("./removenthfromend/helper_removenth");
const { showThreeSumDemo } = require("./threesum/helper_threesum");


// -------------------- Main Execution --------------------
function main() {
    showValidPalindromeDemo(isPalindrome);

    showRemoveNthNodeDemo(removeNthFromEnd, ListNode);

    showThreeSumDemo(threeSum);
}

main();
