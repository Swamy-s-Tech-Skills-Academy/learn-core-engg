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
        return False  # At least 2 elements are needed to form a cycle.

    def next_index(index: int) -> int:
        """Compute the next index in a circular array."""
        return (index + nums[index]) % length

    for i in range(length):
        if nums[i] == 0:
            continue  # Already processed

        direction = nums[i] > 0  # True for forward, False for backward
        slow, fast = i, i

        while True:
            # Move slow pointer one step
            slow = next_index(slow)
            if nums[slow] == 0 or (nums[slow] > 0) != direction:
                break

            # Move fast pointer two steps
            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != direction:
                break
            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != direction:
                break

            # If slow and fast pointers meet, a cycle is detected.
            if slow == fast:
                # Check for a single-element loop (invalid)
                if slow == next_index(slow):
                    break
                return True

        # Mark all elements along the current traversal as 0 to avoid reprocessing.
        j = i
        while nums[j] != 0 and (nums[j] > 0) == direction:
            next_pos = next_index(j)
            nums[j] = 0  # Mark as visited.
            if next_pos == j:
                break
            j = next_pos

    return False
