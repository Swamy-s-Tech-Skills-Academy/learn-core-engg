import unittest
from threesum.algo import three_sum


def sort_triplets(triplets: list) -> list:
    # Sort each triplet and then the list of triplets for consistency
    return sorted([sorted(triplet) for triplet in triplets])


class TestThreeSum(unittest.TestCase):
    def test_three_sum_found(self):
        nums = [-1, 0, 1, 2, -1, -4]
        expected = [[-1, -1, 2], [-1, 0, 1]]
        result = three_sum(nums)
        self.assertEqual(sort_triplets(result), sort_triplets(expected))

    def test_three_sum_empty(self):
        nums = [1, 2, 3, 4, 5]
        self.assertEqual(three_sum(nums), [])

    def test_three_sum_zeros(self):
        nums = [0, 0, 0, 0]
        expected = [[0, 0, 0]]
        self.assertEqual(three_sum(nums), expected)


if __name__ == "__main__":
    unittest.main()
