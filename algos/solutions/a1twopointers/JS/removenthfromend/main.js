const { ListNode, removeNthFromEnd } = require("./algo");

// Helper function to create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Test Cases
const testCases = [
    { input: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
    { input: [1], n: 1, expected: [] },
    { input: [1, 2], n: 1, expected: [1] },
];

testCases.forEach(({ input, n, expected }, index) => {
    let head = createLinkedList(input);
    let newHead = removeNthFromEnd(head, n);
    let result = linkedListToArray(newHead);
    console.log(`Test Case ${index + 1}: ${JSON.stringify(result)} === ${JSON.stringify(expected)} ✅`);
});
