import unittest
from circulararray.algo import circular_array_loop


class TestCircularArrayLoop(unittest.TestCase):

    def test_case_no_cycle(self):
        self.assertFalse(circular_array_loop([-2, -3, -9]))
        self.assertFalse(circular_array_loop([-5, -4, -3, -2, -1]))
        self.assertFalse(circular_array_loop([-1, -2, -3, -4, -5]))
        self.assertFalse(circular_array_loop([2, 1, -1, -2]))

    def test_case_complex(self):
        self.assertTrue(circular_array_loop([1, 2, -3, 3, 4, 7, 1]))
        self.assertTrue(circular_array_loop([2, 2, 2, 7, 2, -1, 2, -1, -1]))

    def test_case_single_element(self):
        self.assertFalse(circular_array_loop([1]))  # Self-loop (ignored)
        self.assertFalse(circular_array_loop([-1]))  # Self-loop (ignored)

    def test_case_small_cycle(self):
        self.assertTrue(circular_array_loop([2, -1, 1, 2, 2]))  # Cycle exists


if __name__ == '__main__':
    unittest.main()
