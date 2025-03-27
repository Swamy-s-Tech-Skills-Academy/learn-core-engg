import { ListNode, removeNthFromEnd } from "./algo";

function createLinkedList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function linkedListToArray(head: ListNode | null): number[] {
    let result: number[] = [];
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
