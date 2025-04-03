import unittest
from circulararray.algo import circular_array_loop


class TestCircularArrayLoop(unittest.TestCase):

    def test_case_no_cycle(self):
        """Test cases where no cycle should be detected."""
        self.assertFalse(circular_array_loop([-2, -3, -9]))
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5]))
        self.assertFalse(circular_array_loop([2, 1, -1, -2]))

    def test_case_complex(self):
        """Test cases where a cycle should be detected."""
        self.assertTrue(circular_array_loop([1, 2, -3, 3, 4, 7, 1]))
        self.assertTrue(circular_array_loop([2, 2, 2, 7, 2, -1, 2, -1, -1]))

    def test_case_single_element(self):
        """Test cases where a single-element array cannot form a cycle."""
        self.assertFalse(circular_array_loop([1]))  # Self-loop (ignored)
        self.assertFalse(circular_array_loop([-1]))  # Self-loop (ignored)

    def test_case_small_cycle(self):
        """Test cases with small valid cycles."""
        self.assertTrue(circular_array_loop([2, -1, 1, 2, 2]))  # Cycle exists
        self.assertFalse(circular_array_loop([1, 1, 1, -2]))  # No valid cycle

    def test_case_mixed_signs(self):
        """Test cases with mixed positive and negative numbers preventing a cycle."""
        self.assertFalse(circular_array_loop([1, -1, 2, -2, 3, -3]))
        self.assertFalse(circular_array_loop([-1, 2, -3, 4, -5, 6]))

    def test_case_large_cycle(self):
        """Test cases with larger valid cycles."""
        self.assertTrue(circular_array_loop([3, 1, 2, 3, 4, -2, -1]))
        self.assertTrue(circular_array_loop([2, -1, 1, 2, 2, -2, -1, 1]))

if __name__ == '__main__':
    unittest.main()
