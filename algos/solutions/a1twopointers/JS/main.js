// Import functions from each module
const { isPalindrome } = require("./palindrome/algo");
const { ListNode, removeNthFromEnd } = require("./removenthfromend/algo");
const { threeSum } = require("./threesum/algo");

// Helper for Remove Nth Node tests: Create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper for Remove Nth Node tests: Convert linked list to array
function linkedListToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// -------------------- Valid Palindrome Tests --------------------
function testValidPalindrome() {
    console.log("========== Valid Palindrome Tests ==========");
    const testCases = [
        "RACEACAR",               // Possibly false if case matters, but after sanitization should be true or false depending on the algorithm specifics
        "A",                      // True: Single character is always a palindrome
        "ABCDEFGFEDCBA",          // True: Perfect palindrome
        "ABC",                    // False: Not a palindrome
        "ABCBA",                  // True: Odd-length palindrome
        "ABBA",                   // True: Even-length palindrome
        "No lemon, no melon",     // True: Palindrome with spaces
        "Was it a car or a cat I saw?", // True: Palindrome with punctuation
        "Able was I, I saw Elba", // True: Classic palindrome phrase
        "12321",                  // True: Numeric palindrome
        "123421",                 // False: Not a palindrome
        "",                       // True: Empty string is a palindrome by definition
        "   "                     // True: Spaces only, if sanitized becomes empty
    ];

    testCases.forEach((s, index) => {
        console.log(`\nTest Case #${index + 1}`);
        console.log("-".repeat(80));
        console.log(`Input: '${s}' (length: ${s.length})`);
        console.log(`Is palindrome? → ${isPalindrome(s)}`);
        console.log("-".repeat(80));
    });
}

// -------------------- Remove Nth Node from End Tests --------------------
function testRemoveNth() {
    console.log("\n========== Remove Nth Node from End Tests ==========");
    const testCases = [
        { input: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
        { input: [1], n: 1, expected: [] },
        { input: [1, 2], n: 1, expected: [1] },
        { input: [1, 2, 3, 4], n: 4, expected: [2, 3, 4] } // Remove head
    ];

    testCases.forEach(({ input, n, expected }, index) => {
        let head = createLinkedList(input);
        let newHead = removeNthFromEnd(head, n);
        let result = linkedListToArray(newHead);
        console.log(`\nTest Case #${index + 1}`);
        console.log("-".repeat(80));
        console.log(`Input List: [${input.join(", ")}], n = ${n}`);
        console.log(`Output List: [${result.join(", ")}]`);
        console.log(`Expected List: [${expected.join(", ")}]`);
        console.log(result.toString() === expected.toString() ? "✅ Passed" : "❌ Failed");
        console.log("-".repeat(80));
    });
}

// -------------------- Three Sum Tests --------------------
function testThreeSum() {
    console.log("\n========== Three Sum Tests ==========");
    const testCases = [
        { input: [-1, 0, 1, 2, -1, -4], description: "Example 1" },
        { input: [1, 2, 3, 4, 5], description: "Example 2 (No triplet)" },
        { input: [0, 0, 0, 0], description: "Example 3 (Multiple zeros)" },
    ];

    testCases.forEach(({ input, description }, index) => {
        const result = threeSum(input);
        console.log(`\nTest Case #${index + 1} - ${description}`);
        console.log("-".repeat(80));
        console.log(`Input: [${input.join(", ")}]`);
        console.log(`Output: ${JSON.stringify(result)}`);
        console.log("-".repeat(80));
    });
}

// -------------------- Main Execution --------------------
function main() {
    testValidPalindrome();
    testRemoveNth();
    testThreeSum();
}

main();
