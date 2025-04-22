// main.js
const { permutePalindrome } = require("./palindromepermutation/algo");
const { TicTacToe } = require("./tictactoe/algo");

// Helpers
const { showPalindromeDemo } = require("./palindromepermutation/helper_palindrome");
const { showTicTacToeDemo } = require("./tictactoe/helper_tictactoe");

function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Palindrome Permutation Algorithm Demonstration");
    console.log("=".repeat(50));
    showPalindromeDemo(permutePalindrome);
    console.log("-".repeat(50));

    console.log("\n" + "=".repeat(50));
    console.log("✅ Tic-Tac-Toe Game Demonstration");
    console.log("=".repeat(50));
    showTicTacToeDemo(TicTacToe);
    console.log("-".repeat(50));
}

main();


