// Combined main.js for all algorithms

// ---------- Valid Palindrome Section ----------
const { isPalindrome } = require("./palindrome/algo");

const palindromeTestCases = [
    "RACEACAR",               // Almost a palindrome (case-sensitive might fail)
    "A",                      // Single character, always a palindrome
    "ABCDEFGFEDCBA",          // Perfect palindrome
    "ABC",                    // Not a palindrome
    "ABCBA",                  // Palindrome (odd length)
    "ABBA",                   // Palindrome (even length)
    "RACEACAR",               // Duplicate test case
    "No lemon, no melon",     // Palindrome with spaces
    "Was it a car or a cat I saw?", // Palindrome with punctuation
    "Able was I, I saw Elba", // Classic palindrome phrase
    "12321",                  // Numeric palindrome
    "123321",                 // Even-length numeric palindrome
    "123421",                 // Not a palindrome
    "!@#$$#@!",               // Special character palindrome
    "racecar",                // Lowercase palindrome
    "RaceCar",                // Mixed case; should return true after sanitization
    "racecar!",               // Palindrome ignoring punctuation
    "hello world",            // Not a palindrome
    "aabbccddeeffgg",         // Not a palindrome
    "",                       // Empty string, considered a palindrome
    "   "                     // Spaces only; if sanitized, becomes empty → palindrome
];

console.log("========== Valid Palindrome Tests ==========");
palindromeTestCases.forEach((s, index) => {
    console.log(`\nTest Case #${index + 1}`);
    console.log("-".repeat(100));
    console.log(`Input: '${s}' (length: ${s.length})`);
    console.log(`Is it a palindrome? → ${isPalindrome(s)}`);
    console.log("-".repeat(100));
});

// ---------- Remove Nth Node from End Section ----------
const { ListNode, removeNthFromEnd } = require("./removenthfromend/algo");

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

const removeNthTestCases = [
    { input: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
    { input: [1], n: 1, expected: [] },
    { input: [1, 2], n: 1, expected: [1] },
    { input: [1, 2, 3, 4], n: 4, expected: [2, 3, 4] } // Remove head
];

console.log("\n========== Remove Nth Node from End Tests ==========");
removeNthTestCases.forEach((testCase, index) => {
    const { input, n, expected } = testCase;
    let head = createLinkedList(input);
    let newHead = removeNthFromEnd(head, n);
    let result = linkedListToArray(newHead);
    console.log(`\nTest Case #${index + 1}`);
    console.log("-".repeat(100));
    console.log(`Input List: [${input.join(", ")}], n = ${n}`);
    console.log(`Output List: [${result.join(", ")}]`);
    console.log(`Expected List: [${expected.join(", ")}]`);
    console.log(result.toString() === expected.toString() ? "✅ Passed" : "❌ Failed");
    console.log("-".repeat(100));
});

// ---------- Three Sum Section ----------
const { threeSum } = require("./threesum/algo");

const threeSumTestCases = [
    { input: [-1, 0, 1, 2, -1, -4], description: "Example 1" },
    { input: [1, 2, 3, 4, 5], description: "Example 2 (No triplet)" },
    { input: [0, 0, 0, 0], description: "Example 3 (Multiple zeros)" },
];

console.log("\n========== Three Sum Tests ==========");
threeSumTestCases.forEach((testCase, index) => {
    const { input, description } = testCase;
    const result = threeSum(input);
    console.log(`\nTest Case #${index + 1} - ${description}`);
    console.log("-".repeat(100));
    console.log(`Input: [${input.join(", ")}]`);
    console.log(`Output: ${JSON.stringify(result)}`);
    console.log("-".repeat(100));
});
