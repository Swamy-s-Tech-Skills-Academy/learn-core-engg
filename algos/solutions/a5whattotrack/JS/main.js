// main.js
const { permutePalindrome } = require("./palindromepermutation/algo");

// Helpers
const { showPalindromeDemo } = require("./palindromepermutation/helper_palindrome");

function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Palindrome Permutation Algorithm Demonstration");
    console.log("=".repeat(50));
    showPalindromeDemo(permutePalindrome);
    console.log("-".repeat(50));
}

main();


