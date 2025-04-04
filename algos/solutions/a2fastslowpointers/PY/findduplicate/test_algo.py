# test_algo.py

import unittest
from findduplicate.algo import find_duplicate


class TestFindDuplicate(unittest.TestCase):
    def test_cases(self):
        self.assertEqual(find_duplicate([1, 3, 2, 3, 5, 4]), 3)
        self.assertEqual(find_duplicate([2, 4, 5, 4, 1, 3]), 4)
        self.assertEqual(find_duplicate([1, 6, 3, 5, 1, 2, 7, 4]), 1)
        self.assertEqual(find_duplicate([1, 2, 2, 4, 3]), 2)
        self.assertEqual(find_duplicate([3, 1, 3, 5, 6, 4, 2]), 3)


if __name__ == "__main__":
    unittest.main()
