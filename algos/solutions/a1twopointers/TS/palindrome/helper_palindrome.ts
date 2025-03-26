import { isPalindrome } from "./algo";

export function showValidPalindromeDemo(): void {
    console.log("========== Valid Palindrome Tests ==========");
    const testCases: string[] = [
        "RACEACAR",
        "A",
        "ABCDEFGFEDCBA",
        "ABC",
        "ABCBA",
        "ABBA",
        "No lemon, no melon",
        "Was it a car or a cat I saw?",
        "Able was I, I saw Elba",
        "12321",
        "123421",
        "",
        "   "
    ];

    testCases.forEach((s, index) => {
        console.log(`\nTest Case #${index + 1}`);
        console.log("-".repeat(80));
        console.log(`Input: '${s}' (length: ${s.length})`);
        console.log(`Is palindrome? → ${isPalindrome(s)}`);
        console.log("-".repeat(80));
    });
}
