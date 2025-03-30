package com.example.palindrome;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class PalindromeTest {
    @Test
    void testIsPalindrome() {
        assertTrue(Palindrome.isPalindrome("racecar"));
        assertTrue(Palindrome.isPalindrome("A man, a plan, a canal: Panama"));
        assertFalse(Palindrome.isPalindrome("hello"));
        assertTrue(Palindrome.isPalindrome(" "));
    }
}
