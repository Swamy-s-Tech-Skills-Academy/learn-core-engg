def circular_array_loop(nums):
    size = len(nums)

    if size < 2:
        return False  # A cycle requires at least two elements.

    # Helper function to get the next index considering circular nature
    def next_index(index):
        return (index + nums[index]) % size  # Handles wrap-around

    for i in range(size):
        if nums[i] == 0:
            continue  # Skip elements that are already visited

        slow, fast = i, i
        forward = nums[i] > 0  # Direction of movement

        while True:
            # Move slow pointer
            slow = next_index(slow)
            if nums[slow] == 0 or (nums[slow] > 0) != forward:
                break

            # Move fast pointer twice
            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != forward:
                break

            fast = next_index(fast)
            if nums[fast] == 0 or (nums[fast] > 0) != forward:
                break

            # Cycle detected
            if slow == fast:
                # Ensure cycle length is greater than 1
                if slow == next_index(slow):
                    break
                return True

        # Mark visited elements as 0 to prevent rechecking
        j = i
        while nums[j] != 0 and (nums[j] > 0) == forward:
            next_pos = next_index(j)
            nums[j] = 0  # Mark as visited
            if next_pos == j:
                break
            j = next_pos

    return False
