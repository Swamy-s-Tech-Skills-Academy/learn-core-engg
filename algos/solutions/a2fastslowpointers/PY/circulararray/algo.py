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
    A valid cycle must:
    - Have a length of at least two.
    - Move in a single direction (all forward or all backward).
    """
    size = len(nums)

    def next_index(index: int) -> int:
        """Compute the next index in a circular manner."""
        return (index + nums[index]) % size

    for i in range(size):
        slow, fast = i, i
        forward = nums[i] > 0  # Direction of movement
        visited = set()

        while True:
            slow = next_index(slow)
            if slow in visited or (nums[slow] > 0) != forward:
                break  # Not a valid cycle

            fast = next_index(fast)
            if fast in visited or (nums[fast] > 0) != forward:
                break  # Not a valid cycle

            fast = next_index(fast)
            if fast in visited or (nums[fast] > 0) != forward:
                break  # Not a valid cycle

            if slow == fast:
                return True  # Cycle found

            visited.add(slow)
            visited.add(fast)

    return False
