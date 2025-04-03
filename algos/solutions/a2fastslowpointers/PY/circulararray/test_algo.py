import unittest
from circulararray.algo import circular_array_loop


class TestCircularArrayLoop(unittest.TestCase):
    """
    Unit test cases for the circular_array_loop function.
    """

    def test_case_with_cycle(self):
        # Valid cycle cases (all movements in the same direction and cycle length > 1)
        # Note: Adjust test expectations per the problem statement.
        # All positive, valid cycle
        self.assertTrue(circular_array_loop([1, 1, 1, 1, 1]))

    def test_case_without_cycle(self):
        self.assertFalse(circular_array_loop([-2, -3, -9]))        # No cycle
        # No valid cycle due to self-loop\n",
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))
        self.assertFalse(circular_array_loop(
            [1, 2, 3, 4, 5]))       # No cycle\n",
        # Mixed directions, invalid cycle\n",
        self.assertFalse(circular_array_loop([-1, 2, 2, -1]))
        self.assertFalse(circular_array_loop(
            [-1, -2, -3, -4, -5, 6]))  # No cycle\n",
        # Mixed directions, invalid cycle
        self.assertFalse(circular_array_loop([2, 2, 2, 7, 2, -1, 2, -1, -1]))
        # Mixed directions, invalid cycle
        self.assertFalse(circular_array_loop([2, -1, 1, 2, 2]))

    def test_case_complex(self):
        # Some more complex cases based on expected behavior from the problem statement.
        # Valid cycle (all positive)
        self.assertTrue(circular_array_loop([1, 1, 1, 1, 1]))
        # Mixed directions, invalid cycle
        self.assertFalse(circular_array_loop([2, 1, -1, -2]))
        self.assertTrue(circular_array_loop(
            [1, 2, -3, 3, 4, 7, 1]))  # Valid cycle exists

    def test_case_edge(self):
        # Edge cases: Single element or zero movements
        # Single element, no cycle
        self.assertFalse(circular_array_loop([1]))
        self.assertFalse(circular_array_loop([0, 0, 0, 0]))      # No movement


if __name__ == "__main__":
    unittest.main()
