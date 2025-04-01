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


def circular_array_loop(nums: list[int]) -> bool:
    """
    Determine if the given circular array contains a cycle.
    A valid cycle must have a length of at least two and be in a single direction.
    """
    size = len(nums)
    for i in range(size):
        slow = i
        fast = i
        # Determine the direction from the starting index
        forward = nums[i] > 0

        while True:
            slow = next_step(slow, nums[slow], size)
            if is_not_cycle(nums, forward, slow):
                break

            fast = next_step(fast, nums[fast], size)
            if is_not_cycle(nums, forward, fast):
                break

            fast = next_step(fast, nums[fast], size)
            if is_not_cycle(nums, forward, fast):
                break

            if slow == fast:
                return True

    return False
