import unittest
from algo import circular_array_loop


class TestCircularArrayLoop(unittest.TestCase):
    def test_case_with_cycle(self):
        # Expecting a cycle
        # A simple cycle exists
        self.assertTrue(circular_array_loop([-1, 2, 2, -1]))

    def test_case_without_cycle(self):
        # No cycle exists
        self.assertFalse(circular_array_loop([1, 2, 3, 4, 5]))

    def test_case_complex(self):
        # Provided test cases
        self.assertFalse(circular_array_loop([-2, -3, -9]))       # No cycle
        # All negatives, no valid cycle
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))
        # All negatives, no valid cycle
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5]))
        self.assertTrue(circular_array_loop(
            [2, 1, -1, -2]))        # Cycle exists
        self.assertFalse(circular_array_loop(
            [-1, -2, -3, -4, -5, 6]))  # Likely no cycle
        # Example with cycle\n"
        self.assertTrue(circular_array_loop([1, 2, -3, 3, 4, 7, 1]))

    def test_case_edge(self):
        # Edge test: Single element cannot form a cycle.
        self.assertFalse(circular_array_loop([1]))


if __name__ == "__main__":
    unittest.main()
