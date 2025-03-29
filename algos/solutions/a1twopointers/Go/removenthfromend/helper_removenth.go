package removenthfromend

import (
	"fmt"
	"strings"
)

// CreateLinkedList creates a linked list from a slice of integers.
func CreateLinkedList(arr []int) *ListNode {
	dummy := &ListNode{Val: 0}
	current := dummy
	for _, num := range arr {
		current.Next = &ListNode{Val: num}
		current = current.Next
	}
	return dummy.Next
}

// LinkedListToSlice converts a linked list to a slice of integers.
func LinkedListToSlice(head *ListNode) []int {
	result := []int{}
	for head != nil {
		result = append(result, head.Val)
		head = head.Next
	}
	return result
}

// ShowRemoveNthNodeDemo prints demo test cases for RemoveNthFromEnd.
func ShowRemoveNthNodeDemo() {
	fmt.Println("\n****************************** Remove Nth Node from End Tests ******************************")
	testCases := []struct {
		input    []int
		n        int
		expected []int
	}{
		{input: []int{1, 2, 3, 4, 5}, n: 2, expected: []int{1, 2, 3, 5}},
		{input: []int{1}, n: 1, expected: []int{}},
		{input: []int{1, 2}, n: 1, expected: []int{1}},
		{input: []int{1, 2, 3, 4}, n: 4, expected: []int{2, 3, 4}}, // Removing the head
	}

	for i, tc := range testCases {
		head := CreateLinkedList(tc.input)
		newHead := RemoveNthFromEnd(head, tc.n)
		result := LinkedListToSlice(newHead)
		fmt.Printf("\nTest Case #%d\n", i+1)
		fmt.Println(strings.Repeat("-", 80))
		fmt.Printf("Input List: %v, n = %d\n", tc.input, tc.n)
		fmt.Printf("Output List: %v\n", result)
		fmt.Printf("Expected List: %v\n", tc.expected)
		if fmt.Sprintf("%v", result) == fmt.Sprintf("%v", tc.expected) {
			fmt.Println("✅ Passed")
		} else {
			fmt.Println("❌ Failed")
		}
		fmt.Println(strings.Repeat("-", 80))
	}
}
