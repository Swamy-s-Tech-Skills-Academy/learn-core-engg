import unittest
from circulararray.algo import circular_array_loop


class TestCircularArrayLoop(unittest.TestCase):
    """
    Unit test cases for the circular_array_loop function.
    """

    def test_case_with_cycle(self):
        # Valid cycle: All elements move in the same direction and cycle length > 1.
        self.assertTrue(circular_array_loop([1, 1, 1, 1, 1]))

    def test_case_without_cycle(self):
        self.assertFalse(circular_array_loop([-2, -3, -9]))         # No cycle.
        # Single-element loops, invalid.
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))
        # No cycle.
        self.assertFalse(circular_array_loop([1, 2, 3, 4, 5]))
        # Mixed directions, invalid.
        self.assertFalse(circular_array_loop([-1, 2, 2, -1]))
        # No cycle.
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5, 6]))
        # Mixed directions.
        self.assertFalse(circular_array_loop([2, 2, 2, 7, 2, -1, 2, -1, -1]))
        # Mixed directions.
        self.assertFalse(circular_array_loop([2, -1, 1, 2, 2]))

    def test_case_complex(self):
        # Additional complex test cases based on expected behavior.
        self.assertFalse(circular_array_loop([-2, -3, -9]))
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5]))
        # Valid cycle exists.
        self.assertTrue(circular_array_loop([1, 2, -3, 3, 4, 7, 1]))

    def test_case_edge(self):
        # Edge cases: Single element or no movement cannot form a cycle.
        self.assertFalse(circular_array_loop([1]))
        self.assertFalse(circular_array_loop([0, 0, 0, 0]))


if __name__ == "__main__":
    unittest.main()
