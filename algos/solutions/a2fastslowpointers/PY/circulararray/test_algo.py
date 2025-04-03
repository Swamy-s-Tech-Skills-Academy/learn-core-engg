import unittest
from circulararray.algo import circular_array_loop


class TestCircularArrayLoop(unittest.TestCase):
    def test_case_with_cycle(self):
        # Expecting a cycle exists
        self.assertTrue(circular_array_loop([-1, 2, 2, -1]))

    def test_case_without_cycle(self):
        # Expecting no cycle
        self.assertFalse(circular_array_loop([1, 2, 3, 4, 5]))

    def test_case_complex(self):
        self.assertFalse(circular_array_loop([-2, -3, -9]))        # No cycle
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))  # No cycle
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5]))  # No cycle
        self.assertTrue(circular_array_loop(
            [2, 1, -1, -2]))         # Cycle exists
        self.assertFalse(circular_array_loop(
            [-1, -2, -3, -4, -5, 6]))  # No cycle
        self.assertTrue(circular_array_loop(
            [1, 2, -3, 3, 4, 7, 1]))   # Cycle exists

    def test_case_edge(self):
        # Single element cannot form a cycle.
        self.assertFalse(circular_array_loop([1]))


if __name__ == "__main__":
    unittest.main()
