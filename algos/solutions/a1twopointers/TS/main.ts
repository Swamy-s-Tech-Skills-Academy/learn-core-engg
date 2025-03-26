import { isPalindrome } from "./palindrome/algo";
import { ListNode, removeNthFromEnd } from "./removenthfromend/algo";
import { threeSum } from "./threesum/algo";

import { showValidPalindromeDemo } from "./palindrome/helper_palindrome";
import { showRemoveNthNodeDemo } from "./removenthfromend/helper_removenth";
import { showThreeSumDemo } from "./threesum/helper_threesum";

function main(): void {
    console.log("=".repeat(50));
    console.log("✅ Palindrome Algorithm Demonstration");
    console.log("=".repeat(50));
    showValidPalindromeDemo();

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
