package removenthfromend

import (
	"reflect"
	"testing"
)

// Helper function to create a linked list from a slice.
func createLinkedList(arr []int) *ListNode {
	dummy := &ListNode{Val: 0}
	curr := dummy
	for _, v := range arr {
		curr.Next = &ListNode{Val: v}
		curr = curr.Next
	}
	return dummy.Next
}

// Helper function to convert a linked list to a slice.
func linkedListToSlice(head *ListNode) []int {
	res := []int{}
	for head != nil {
		res = append(res, head.Val)
		head = head.Next
	}
	return res
}

func TestRemoveNthFromEnd(t *testing.T) {
	tests := []struct {
		input    []int
		n        int
		expected []int
	}{
		{[]int{1, 2, 3, 4, 5}, 2, []int{1, 2, 3, 5}},
		{[]int{1}, 1, []int{}},
		{[]int{1, 2}, 1, []int{1}},
		{[]int{1, 2, 3, 4}, 4, []int{2, 3, 4}},
	}

	for _, tt := range tests {
		head := createLinkedList(tt.input)
		newHead := RemoveNthFromEnd(head, tt.n)
		got := linkedListToSlice(newHead)
		if !reflect.DeepEqual(got, tt.expected) {
			t.Errorf("RemoveNthFromEnd(%v, %d) = %v; want %v", tt.input, tt.n, got, tt.expected)
		}
	}
}
