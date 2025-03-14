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

test("Remove 2nd node from end of [1,2,3,4,5]", () => {
    let head = createLinkedList([1, 2, 3, 4, 5]);
    let newHead = removeNthFromEnd(head, 2);
    expect(linkedListToArray(newHead)).toEqual([1, 2, 3, 5]);
});

test("Remove 1st node from end of [1]", () => {
    let head = createLinkedList([1]);
    let newHead = removeNthFromEnd(head, 1);
    expect(linkedListToArray(newHead)).toEqual([]);
});

test("Remove 1st node from end of [1,2]", () => {
    let head = createLinkedList([1, 2]);
    let newHead = removeNthFromEnd(head, 1);
    expect(linkedListToArray(newHead)).toEqual([1]);
});
