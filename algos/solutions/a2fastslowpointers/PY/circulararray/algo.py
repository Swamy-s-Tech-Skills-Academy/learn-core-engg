from typing import List


def circular_array_loop(nums: List[int]) -> bool:
    """
    Determine if a circular array contains a valid cycle.
    A valid cycle must have a length of at least 2 and be entirely in one direction.
    """
    n = len(nums)
    if n == 0:
        return False

    # Helper: Compute the next index in a circular array.
    def next_index(i: int) -> int:
        return (i + nums[i]) % n

    # Helper: Check if the movement at pointer is not in the same direction or is a single-step loop.
    def is_not_cycle(pointer: int, direction: bool) -> bool:
        # If the element at pointer does not follow the same direction, or if the movement is 0 (or a multiple of n)
        if (nums[pointer] >= 0) != direction or (nums[pointer] % n == 0):
            return True
        return False

    for i in range(n):
        # Skip if this element was already processed.
        if nums[i] == 0:
            continue

        direction = nums[i] > 0  # True for forward, False for backward.
        slow, fast = i, i

        while True:
            slow_next = next_index(slow)
            if is_not_cycle(slow_next, direction):
                break

            fast_next = next_index(fast)
            if is_not_cycle(fast_next, direction):
                break

            fast_next = next_index(fast_next)
            if is_not_cycle(fast_next, direction):
                break

            slow = slow_next
            fast = fast_next

            if slow == fast:
                # Check for single-element loop.
                if slow == next_index(slow):
                    break
                return True

        # Mark all nodes in the current traversal as 0 to avoid re-processing.
        j = i
        while nums[j] != 0 and ((nums[j] > 0) == direction):
            next_j = next_index(j)
            nums[j] = 0  # Mark visited.
            if next_j == j:
                break
            j = next_j

    return False
