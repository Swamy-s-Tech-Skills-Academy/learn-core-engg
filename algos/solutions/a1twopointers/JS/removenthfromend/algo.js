class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy, second = dummy;

    // Move `first` pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both `first` and `second` pointers together
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Delete nth node from end
    second.next = second.next.next;

    return dummy.next; // Return updated head
}

module.exports = { ListNode, removeNthFromEnd };
