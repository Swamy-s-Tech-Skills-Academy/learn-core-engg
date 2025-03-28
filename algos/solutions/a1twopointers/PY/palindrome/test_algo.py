import unittest
# from algo import is_palindrome
# Absolute Import
from palindrome.algo import is_palindrome


class TestIsPalindrome(unittest.TestCase):
    def test_palindrome_abcba(self):
        self.assertTrue(is_palindrome("ABCBA"))

    def test_palindrome_abba(self):
        self.assertTrue(is_palindrome("ABBA"))

    def test_non_palindrome(self):
        self.assertFalse(is_palindrome("ABCDE"))

    def test_single_character(self):
        self.assertTrue(is_palindrome("A"))

    def test_empty_string(self):
        self.assertTrue(is_palindrome(""))


if __name__ == "__main__":
    unittest.main()
