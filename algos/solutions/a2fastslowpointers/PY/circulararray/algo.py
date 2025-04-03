from typing import List


def circular_array_loop(nums: List[int]) -> bool:
    n = len(nums)
    if n == 0:
        return False

    def next_index(i: int) -> int:
        return (i + nums[i]) % n

    for i in range(n):
        if nums[i] == 0:
            continue

        direction = nums[i] > 0
        slow, fast = i, i
        cycle_length = 0

        while True:
            slow = next_index(slow)
            fast = next_index(next_index(fast))
            cycle_length += 1

            if (
                (nums[slow] > 0) != direction
                or (nums[fast] > 0) != direction
                or (nums[next_index(fast)] > 0) != direction
            ):
                break

            if slow == fast:
                if cycle_length <= 1:
                    break
                return True

        j = i
        while nums[j] != 0 and ((nums[j] > 0) == direction):
            next_j = next_index(j)
            nums[j] = 0
            if next_j == j:
                break
            j = next_j

    return False
