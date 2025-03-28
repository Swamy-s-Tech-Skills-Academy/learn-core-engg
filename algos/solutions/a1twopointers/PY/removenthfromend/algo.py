class ListNode:
    def __init__(self, val: int = 0, next: 'ListNode' = None):
        self.val = val
        self.next = next


def remove_nth_from_end(head: ListNode, n: int) -> ListNode:
    """
    Removes the nth node from the end of a linked list and returns the head of the list.
    Uses a two-pointer approach with a dummy node.
    """
    dummy = ListNode(0, head)
    first = dummy
    second = dummy

    # Move first pointer n+1 steps ahead
    for _ in range(n + 1):
        if first is not None:
            first = first.next

    # Move both pointers until first reaches the end
    while first is not None:
        first = first.next
        second = second.next

    # Remove the nth node
    if second.next:
        second.next = second.next.next

    return dummy.next
