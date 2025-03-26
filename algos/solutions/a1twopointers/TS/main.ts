import { isPalindrome } from "./palindrome/algo";
import { removeNthFromEnd } from "./removenthfromend/algo";
import { threeSum } from "./threesum/algo";

import { showValidPalindromeDemo } from "./palindrome/helper_palindrome";
import { showRemoveNthNodeDemo } from "./removenthfromend/helper_removenth"; // ✅ No need to pass ListNode
import { showThreeSumDemo } from "./threesum/helper_threesum";

function main(): void {
    console.log("=".repeat(50));
    console.log("✅ Palindrome Algorithm Demonstration");
    console.log("=".repeat(50));
    showValidPalindromeDemo(isPalindrome);

    console.log("\n" + "=".repeat(50));
    console.log("✅ Remove Nth Node Algorithm Demonstration");
    console.log("=".repeat(50));
    showRemoveNthNodeDemo(); // ✅ No ListNode argument needed!

    console.log("\n" + "=".repeat(50));
    console.log("✅ Three Sum Algorithm Demonstration");
    console.log("=".repeat(50));
    showThreeSumDemo(threeSum);
}

main();
