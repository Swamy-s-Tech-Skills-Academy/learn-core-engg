package com.example.palindrome;

public class PalindromeHelper {
    public static void demoPalindrome() {
        String[] testCases = {
                "racecar",
                "A man, a plan, a canal: Panama",
                "hello",
                " "
        };

        for (String testCase : testCases) {
            boolean result = Palindrome.isPalindrome(testCase);
            System.out.println("\"" + testCase + "\" is palindrome? " + result);
        }
    }
}
