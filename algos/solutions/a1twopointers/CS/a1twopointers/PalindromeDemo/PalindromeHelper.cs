namespace a1twopointers.PalindromeDemo;

internal sealed class PalindromeHelper
{
    public static void DemoPalindrome()
    {
        string[] testCases =
        {
            "RACEACAR",               // Mixed-case; should be a palindrome.
            "A",                      // Single character: always a palindrome.
            "ABCDEFGFEDCBA",          // Perfect palindrome.
            "ABC",                    // Not a palindrome.
            "ABCBA",                  // Palindrome (odd-length).
            "ABBA",                   // Palindrome (even-length).
            "No lemon, no melon",     // Palindrome with spaces.
            "Was it a car or a cat I saw?", // Palindrome with punctuation.
            "Able was I, I saw Elba", // Classic palindrome phrase.
            "12321",                  // Numeric palindrome.
            "123421",                 // Not a palindrome.
            "",                       // Empty string: considered a palindrome.
            "   "                     // Spaces only; when sanitized, becomes empty → palindrome.
        };

        foreach (string testCase in testCases)
        {
            bool result = Palindrome.IsValidPalindrome(testCase);
            WriteLine($"\"{testCase}\" is palindrome? {result}");
        }
    }
}
