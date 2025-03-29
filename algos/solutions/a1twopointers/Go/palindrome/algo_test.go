package palindrome

import "testing"

func TestIsPalindrome(t *testing.T) {
	tests := []struct {
		input string
		want  bool
	}{
		{"racecar", true},
		{"Racecar", true},
		{"A man, a plan, a canal: Panama", true},
		{"hello", false},
		{"", true},
		{"   ", true},
		{"ABC", false},
		{"ABCBA", true},
		{"ABBA", true},
	}

	for _, tt := range tests {
		got := IsPalindrome(tt.input)
		if got != tt.want {
			t.Errorf("IsPalindrome(%q) = %v; want %v", tt.input, got, tt.want)
		}
	}
}
