import unittest
from happynumber.algo import is_happy_number

class TestHappyNumber(unittest.TestCase):

    def test_happy_numbers(self):
        self.assertTrue(is_happy_number(19))  # 19 is a happy number
        self.assertTrue(is_happy_number(7))   # 7 is a happy number
        self.assertTrue(is_happy_number(1))   # 1 is a happy number
        self.assertTrue(is_happy_number(100)) # 100 is a happy number

    def test_unhappy_numbers(self):
        self.assertFalse(is_happy_number(2))  # 2 leads to a cycle
        self.assertFalse(is_happy_number(4))  # 4 leads to a cycle
        self.assertFalse(is_happy_number(20)) # 20 leads to a cycle
        self.assertFalse(is_happy_number(23)) # 23 leads to a cycle

if __name__ == "__main__":
    unittest.main()
