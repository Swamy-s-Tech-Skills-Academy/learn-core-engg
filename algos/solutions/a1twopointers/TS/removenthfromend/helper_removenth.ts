import { ListNode, removeNthFromEnd } from "./algo";  // ✅ Use ListNode directly

// Helper: Create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper: Convert a linked list to an array
function linkedListToArray(head: ListNode | null): number[] {
    let result: number[] = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Function to run and display test cases
export function showRemoveNthNodeDemo(): void {  // ✅ No parameters needed
    console.log("\n****************************** Remove Nth Node from End Tests ******************************");
    const testCases = [
        { input: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
        { input: [1], n: 1, expected: [] },
        { input: [1, 2], n: 1, expected: [1] },
        { input: [1, 2, 3, 4], n: 4, expected: [2, 3, 4] } // Removing the head
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
