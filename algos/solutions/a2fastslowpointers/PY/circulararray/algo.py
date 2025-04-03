from typing import List


def circular_array_loop(nums: List[int]) -> bool:
    """
    Determines if there is a cycle in the circular array.
    """
    n = len(nums)

    def next_index(index: int) -> int:
        """Computes the next index in a circular array."""
        return (index + nums[index]) % n

    for i in range(n):
        if nums[i] == 0:  # Skip processed elements
            continue

        slow, fast = i, i
        direction = nums[i] > 0  # True if positive, False if negative

        while True:
            slow = next_index(slow)
            if nums[slow] == 0 or (nums[slow] > 0) != direction:
                break

            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != direction:
                break
            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != direction:
                break

            if slow == fast:
                # Ensure it's a valid cycle (not a single-element self-loop)
                if slow != next_index(slow):
                    return True
                break

        # Mark all visited elements as 0 (processed)
        j = i
        while nums[j] != 0 and (nums[j] > 0) == direction:
            next_pos = next_index(j)
            nums[j] = 0
            j = next_pos

    return False
