package palindrome

import (
	"strings"
	"unicode"
)

// IsPalindrome checks if the input string is a palindrome after sanitizing.
func IsPalindrome(s string) bool {
	var sanitized strings.Builder
	for _, r := range s {
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			sanitized.WriteRune(unicode.ToLower(r))
		}
	}
	str := sanitized.String()
	left, right := 0, len(str)-1
	for left < right {
		if str[left] != str[right] {
			return false
		}
		left++
		right--
	}
	return true
}
