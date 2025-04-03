# algo.py
from typing import List


def circular_array_loop(nums: List[int]) -> bool:
    size = len(nums)
    if size == 0:
        return False

    def next_index(index: int, num: int) -> int:
        return (index + num) % size

    for start in range(size):
        if nums[start] == 0:
            continue

        direction = nums[start] > 0
        slow, fast = start, start

        while True:
            slow = next_index(slow, nums[slow])
            fast = next_index(fast, nums[fast])
            if fast == slow:
                if slow == next_index(slow, nums[slow]):
                    break

                cycle_length = 1
                current = next_index(slow, nums[slow])

                valid_cycle = True
                while current != slow:
                    if (nums[current] > 0) != direction:
                        valid_cycle = False
                        break
                    cycle_length += 1
                    current = next_index(current, nums[current])

                if valid_cycle and cycle_length > 1:
                    return True
                break

            fast = next_index(fast, nums[fast])
            if (nums[slow] > 0) != direction or (nums[fast] > 0) != direction:
                break

        if nums[slow] == 0:
            continue

        j = start
        while nums[j] != 0 and (nums[j] > 0) == direction:
            next_j = next_index(j, nums[j])
            nums[j] = 0
            if next_j == j:
                break
            j = next_j
    return False
