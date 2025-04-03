from typing import List


def next_step(pointer: int, value: int, size: int) -> int:
    """Calculate the next index in the circular array."""
    result = (pointer + value) % size
    return result


def is_not_cycle(nums: list[int], prev_direction: bool, pointer: int) -> bool:
    """
    Determine if the movement at the given pointer does not continue the cycle.
    - The movement must be in the same direction.
    - The element should not be a multiple of the array length (which causes no movement).
    """
    curr_direction = nums[pointer] >= 0
    if prev_direction != curr_direction or (nums[pointer] % len(nums) == 0):
        return True
    return False


def circular_array_loop(nums: List[int]) -> bool:
    n = len(nums)

    # Helper: Get next index in circular fashion.
    def next_index(i: int) -> int:
        return (i + nums[i]) % n

    for i in range(n):
        # Skip if already processed.
        if nums[i] == 0:
            continue

        # Determine direction (True if positive, False if negative)
        direction = nums[i] > 0
        slow, fast = i, i

        while True:
            # Move slow pointer one step
            next_slow = next_index(slow)
            # Check if the move is valid
            if (nums[next_slow] > 0) != direction or next_slow == slow:
                break

            # Move fast pointer one step
            next_fast = next_index(fast)
            if (nums[next_fast] > 0) != direction or next_fast == fast:
                break

            # Move fast pointer one more step
            next_fast = next_index(next_fast)
            if (nums[next_fast] > 0) != direction or next_fast == fast:
                break

            slow = next_slow
            fast = next_fast

            # A cycle is found if slow meets fast
            if slow == fast:
                return True

        # Mark all nodes in the current traversal as 0 to avoid re-processing.
        j = i
        while (nums[j] > 0) == direction:
            next_j = next_index(j)
            nums[j] = 0  # Mark visited
            if next_j == j:
                break
            j = next_j

    return False
