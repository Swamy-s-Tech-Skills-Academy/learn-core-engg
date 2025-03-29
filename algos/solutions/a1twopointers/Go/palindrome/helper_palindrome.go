package palindrome

import (
	"fmt"
	"strings"
)

// ShowValidPalindromeDemo prints demo test cases for the IsPalindrome function.
func ShowValidPalindromeDemo() {
	fmt.Println("========== Valid Palindrome Tests ==========")
	testCases := []string{
		"RACEACAR",
		"A",
		"ABCDEFGFEDCBA",
		"ABC",
		"ABCBA",
		"ABBA",
		"No lemon, no melon",
		"Was it a car or a cat I saw?",
		"Able was I, I saw Elba",
		"12321",
		"123421",
		"",
		"   ",
	}

	for i, s := range testCases {
		fmt.Printf("\nTest Case #%d\n", i+1)
		fmt.Println(strings.Repeat("-", 80))
		fmt.Printf("Input: '%s' (length: %d)\n", s, len(s))
		fmt.Printf("Is palindrome? → %v\n", IsPalindrome(s))
		fmt.Println(strings.Repeat("-", 80))
	}
}
