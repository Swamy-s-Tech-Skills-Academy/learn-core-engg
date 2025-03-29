package removenthfromend

// ListNode defines a singly linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

// RemoveNthFromEnd removes the nth node from the end of the list.
func RemoveNthFromEnd(head *ListNode, n int) *ListNode {
	dummy := &ListNode{Val: 0, Next: head}
	first := dummy
	second := dummy

	// Move first n+1 steps ahead
	for i := 0; i <= n; i++ {
		if first != nil {
			first = first.Next
		}
	}

	// Move both pointers until first reaches the end
	for first != nil {
		first = first.Next
		second = second.Next
	}

	// Remove the nth node
	if second.Next != nil {
		second.Next = second.Next.Next
	}

	return dummy.Next
}
