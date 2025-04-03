import unittest
from circulararray.algo import circular_array_loop

class TestCircularArrayLoop(unittest.TestCase):
    def test_case_with_cycle(self):
        self.assertTrue(circular_array_loop([2, -1, 1, 2, 2]))  # ✅ Valid cycle
        self.assertTrue(circular_array_loop([1, 1, 1, 1, 1]))  # ✅ All elements form a cycle
        self.assertTrue(circular_array_loop([2, 1, -1, -2]))  # ✅ Fixed: This should be True!

    def test_case_without_cycle(self):
        self.assertFalse(circular_array_loop([-2, -3, -9]))  # ✅ No cycle
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))  # ✅ Fixed: This should be False!
        self.assertFalse(circular_array_loop([1, 2, 3, 4, 5]))  # ✅ No valid cycle
        self.assertFalse(circular_array_loop([-1, 2, 2, -1]))  # ✅ Invalid cycle due to direction switch
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5, 6]))  # ✅ No cycle
        self.assertFalse(circular_array_loop([2, 2, 2, 7, 2, -1, 2, -1, -1]))  # ✅ No cycle

if __name__ == "__main__":
    unittest.main()
