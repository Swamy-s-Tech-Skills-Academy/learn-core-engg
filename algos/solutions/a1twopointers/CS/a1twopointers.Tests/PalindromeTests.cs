using a1twopointers.PalindromeDemo;

namespace a1twopointers.Tests;

public class PalindromeTests
{
    [Theory]
    [InlineData("RACEACAR", false)]
    [InlineData("A", true)]
    [InlineData("ABCDEFGFEDCBA", true)]
    [InlineData("ABC", false)]
    [InlineData("ABCBA", true)]
    [InlineData("ABBA", true)]
    [InlineData("No lemon, no melon", true)]
    [InlineData("Was it a car or a cat I saw?", true)]
    [InlineData("Able was I, I saw Elba", true)]
    [InlineData("12321", true)]
    [InlineData("123421", false)]
    [InlineData("", true)]
    [InlineData("   ", true)]
    public void IsValidPalindrome_ShouldReturnExpectedResult(string input, bool expected)
    {
        // Act
        bool result = Palindrome.IsValidPalindrome(input);

        // Assert
        Assert.Equal(expected, result);
    }
}
