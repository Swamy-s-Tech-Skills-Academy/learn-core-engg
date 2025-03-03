// main.js
const { isPalindrome } = require('./algo');

function main() {
    let testCases = [
        "RACEACAR",
        "A",
        "ABCDEFGFEDCBA",
        "ABC",
        "ABCBA",
        "ABBA",
        "RACEACAR"
    ];
    let i = 1;

    testCases.forEach((s) => {
        console.log("Test Case #", i);
        console.log("-".repeat(100));
        console.log(`The input string is '${s}' and the length of the string is ${s.length}.`);
        console.log("\nIs it a palindrome?.....", isPalindrome(s));
        console.log("-".repeat(100));
        i++;
    });
}

main();
