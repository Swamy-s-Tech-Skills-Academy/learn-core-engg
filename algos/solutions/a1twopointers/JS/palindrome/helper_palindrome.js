// helper_palindrome.js

function showValidPalindromeDemo(isPalindrome) {
    console.log("========== Valid Palindrome Tests ==========");
    const testCases = [
        "RACEACAR",               // Mixed-case; after sanitization, should be palindrome if correct.
        "A",                      // Single character: always a palindrome.
        "ABCDEFGFEDCBA",          // Perfect palindrome.
        "ABC",                    // Not a palindrome.
        "ABCBA",                  // Palindrome (odd-length).
        "ABBA",                   // Palindrome (even-length).
        "No lemon, no melon",     // Palindrome with spaces.
        "Was it a car or a cat I saw?", // Palindrome with punctuation.
        "Able was I, I saw Elba", // Classic palindrome phrase.
        "12321",                  // Numeric palindrome.
        "123421",                 // Not a palindrome.
        "",                       // Empty string: considered a palindrome.
        "   "                     // Spaces only; when sanitized becomes empty → palindrome.
    ];

    testCases.forEach((s, index) => {
        console.log(`\nTest Case #${index + 1}`);
        console.log("-".repeat(80));
        console.log(`Input: '${s}' (length: ${s.length})`);
        console.log(`Is palindrome? → ${isPalindrome(s)}`);
        console.log("-".repeat(80));
    });
}

module.exports = { testValidPalindrome: showValidPalindromeDemo };
