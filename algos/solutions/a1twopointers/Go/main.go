package main

import (
	"a1twopointers/go/palindrome"
	"a1twopointers/go/removenthfromend"
	"a1twopointers/go/threesum"
	"fmt"
	"strings"
)

func main() {
	fmt.Println(strings.Repeat("=", 50))
	fmt.Println("✅ Palindrome Algorithm Demonstration")
	fmt.Println(strings.Repeat("=", 50))
	palindrome.ShowValidPalindromeDemo()

	fmt.Println("\n" + strings.Repeat("=", 50))
	fmt.Println("✅ Remove Nth Node Algorithm Demonstration")
	fmt.Println(strings.Repeat("=", 50))
	removenthfromend.ShowRemoveNthNodeDemo()

	fmt.Println("\n" + strings.Repeat("=", 50))
	fmt.Println("✅ Three Sum Algorithm Demonstration")
	fmt.Println(strings.Repeat("=", 50))
	threesum.ShowThreeSumDemo()
}
