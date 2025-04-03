from typing import List


def circular_array_loop(nums: List[int]) -> bool:
    """
    Determines if there is a cycle in the circular array where:
    - Movement follows the direction of the numbers (+ for forward, - for backward).
    - The cycle must have more than one element.
    - The cycle must be in a single direction.

    :param nums: List of non-zero integers representing the circular array.
    :return: True if a valid cycle exists, otherwise False.
    """
    length = len(nums)
    if length < 2:
        return False

    def next_index(pointer: int, value: int, size: int) -> int:
        result = (pointer + value) % size
        if result < 0:
            result += size
        return result

    for i in range(length):
        slow = i
        fast = i
        forward = nums[i] > 0
        cycle_length = 0

        while True:
            slow = next_index(slow, nums[slow], length)
            cycle_length += 1
            if (nums[slow] > 0) != forward or nums[slow] % length == 0:
                break

            fast = next_index(fast, nums[fast], length)
            if (nums[fast] > 0) != forward or nums[fast] % length == 0:
                break

            fast = next_index(fast, nums[fast], length)
            if (nums[fast] > 0) != forward or nums[fast] % length == 0:
                break

            if slow == fast:
                if cycle_length > 1 and slow != next_index(slow, nums[slow], length):
                    return True
                else:
                    break

    return False
