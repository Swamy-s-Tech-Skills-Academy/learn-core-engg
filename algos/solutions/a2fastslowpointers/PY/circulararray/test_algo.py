# test_algo.py
import unittest
from circulararray.algo import circular_array_loop


class TestCircularArrayLoop(unittest.TestCase):
    def test_case_with_cycle(self):
        self.assertTrue(circular_array_loop([2, 1, -1, -2]))
        self.assertTrue(circular_array_loop([1, 2, -3, 3, 4, 7, 1]))

    def test_case_without_cycle(self):
        self.assertFalse(circular_array_loop([-2, -3, -9]))
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))
        self.assertFalse(circular_array_loop([-1, 2, 2, -1]))
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5]))
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5, 6]))
        self.assertFalse(circular_array_loop([1, 2, 3, 4, 5]))
        self.assertFalse(circular_array_loop([1]))
        self.assertFalse(circular_array_loop([0, 0, 0, 0]))
        self.assertFalse(circular_array_loop([2, 2, 2, 7, 2, -1, 2, -1, -1]))


if __name__ == "__main__":
    unittest.main()
