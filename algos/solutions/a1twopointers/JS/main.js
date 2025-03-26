// Import functions from each module
const { isPalindrome } = require("./palindrome/algo");
const { ListNode, removeNthFromEnd } = require("./removenthfromend/algo");
const { threeSum } = require("./threesum/algo");

// Import helper functions from separate files
const { showValidPalindromeDemo } = require("./palindrome/helper_palindrome");
const { showRemoveNthNodeDemo } = require("./removenthfromend/helper_removenth");
const { showThreeSumDemo } = require("./threesum/helper_threesum");

// -------------------- Main Execution --------------------
function main() {
    console.log("=".repeat(50));
    console.log("✅ Palindrome Algorithm Demonstration");
    console.log("=".repeat(50));
    showValidPalindromeDemo(isPalindrome);

    console.log("\n" + "=".repeat(50));
    console.log("✅ Remove Nth Node Algorithm Demonstration");
    console.log("=".repeat(50));
    showRemoveNthNodeDemo(removeNthFromEnd, ListNode);

    console.log("\n" + "=".repeat(50));
    console.log("✅ Three Sum Algorithm Demonstration");
    console.log("=".repeat(50));
    showThreeSumDemo(threeSum);
}

main();
