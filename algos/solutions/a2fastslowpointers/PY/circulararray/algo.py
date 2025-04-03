# algo.py
from typing import List


def circular_array_loop(nums: List[int]) -> bool:
    length = len(nums)
    if length == 0:
        return False

    def next_index(index: int, num: int) -> int:
        return (index + num) % length

    for start in range(length):
        if nums[start] == 0:
            continue

        direction = nums[start] > 0
        slow, fast = start, start

        while True:
            slow = next_index(slow, nums[slow])
            fast = next_index(fast, nums[fast])

            if (nums[slow] > 0) != direction or (nums[fast] > 0) != direction:
                break

            fast = next_index(fast, nums[fast])
            if (nums[fast] > 0) != direction:
                break

            if slow == fast:
                if slow == next_index(slow, nums[slow]):
                    break
                return True

        j = start
        while nums[j] != 0 and (nums[j] > 0) == direction:
            next_j = next_index(j, nums[j])
            nums[j] = 0
            if next_j == j:
                break
            j = next_j

    return False
