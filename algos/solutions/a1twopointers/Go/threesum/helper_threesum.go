package threesum

import (
	"encoding/json"
	"fmt"
	"strings"
)

// ShowThreeSumDemo prints demo test cases for ThreeSum.
func ShowThreeSumDemo() {
	fmt.Println("\n****************************** Three Sum Tests ******************************")
	testCases := []struct {
		input       []int
		description string
	}{
		{input: []int{-1, 0, 1, 2, -1, -4}, description: "Example 1"},
		{input: []int{1, 2, 3, 4, 5}, description: "Example 2 (No triplet)"},
		{input: []int{0, 0, 0, 0}, description: "Example 3 (Multiple zeros)"},
	}

	for i, tc := range testCases {
		result := ThreeSum(tc.input)
		resJSON, _ := json.Marshal(result)
		fmt.Printf("\nTest Case #%d - %s\n", i+1, tc.description)
		fmt.Println(strings.Repeat("-", 80))
		fmt.Printf("Input: %v\n", tc.input)
		fmt.Printf("Output: %s\n", resJSON)
		fmt.Println(strings.Repeat("-", 80))
	}
}
