export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy: ListNode = new ListNode(0, head);
    let first: ListNode | null = dummy, second: ListNode | null = dummy;

    for (let i = 0; i <= n; i++) {
        if (first) first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second!.next;
    }

    if (second && second.next) {
        second.next = second.next.next;
    }

    return dummy.next;
}
