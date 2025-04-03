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
        return False  # At least two elements are needed to form a cycle.

    def next_index(i: int) -> int:
        """Compute the next index in the circular array."""
        return (i + nums[i]) % length

    for i in range(length):
        if nums[i] == 0:
            continue  # Skip already processed elements

        slow, fast = i, i
        direction = nums[i] > 0  # True for forward, False for backward

        while True:
            # Move slow pointer one step.
            slow = next_index(slow)
            if nums[slow] == 0 or (nums[slow] > 0) != direction:
                break

            # Move fast pointer two steps.
            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != direction:
                break
            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != direction:
                break

            # Cycle detected.
            if slow == fast:
                # Check for self-loop; if the pointer moves to itself in one step, it's invalid.
                if slow == next_index(slow):
                    break
                return True

        # Mark all nodes in the current traversal as visited (set them to 0) to avoid reprocessing.
        j = i
        while nums[j] != 0 and (nums[j] > 0) == direction:
            next_pos = next_index(j)
            nums[j] = 0  # Mark as visited
            if next_pos == j:
                break
            j = next_pos

    return False
