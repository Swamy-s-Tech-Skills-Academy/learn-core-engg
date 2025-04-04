# algo.py

def find_duplicate(nums):
    """
    Finds the duplicate number in the given array using Floyd's cycle detection algorithm.
    """
    slow, fast = nums[0], nums[0]

    # Phase 1: Finding the intersection point
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break

    # Phase 2: Finding the entrance to the cycle
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]

    return slow
