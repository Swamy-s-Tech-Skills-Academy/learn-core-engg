# algo.py
from typing import List


def circular_array_loop(nums: List[int]) -> bool:
    length = len(nums)

    def get_next_index(current_index):
        """ Returns the next index in a circular manner. """
        return (current_index + nums[current_index]) % length

    visited = set()  # Track visited elements without modifying nums

    for i in range(length):
        if i in visited:
            continue

        slow_pointer = i
        fast_pointer = get_next_index(i)
        direction = nums[i] > 0  # True for positive, False for negative

        while (
            nums[slow_pointer] * nums[fast_pointer] > 0 and
            nums[slow_pointer] * nums[get_next_index(fast_pointer)] > 0
        ):
            if slow_pointer == fast_pointer:
                # Ensure the cycle length is more than 1
                if slow_pointer != get_next_index(slow_pointer):
                    return True
                break  # Self-loop detected

            visited.add(slow_pointer)
            slow_pointer = get_next_index(slow_pointer)
            fast_pointer = get_next_index(get_next_index(fast_pointer))

    return False


# from typing import List


# def circular_array_loop(nums: List[int]) -> bool:
#     """
#     Determines if there is a cycle in the circular array.
#     """
#     n = len(nums)

#     def next_index(index: int) -> int:
#         """Computes the next index in a circular array."""
#         return (index + nums[index]) % n

#     for i in range(n):
#         if nums[i] == 0:
#             continue

#         slow, fast = i, i

#         while True:
#             slow = next_index(slow)
#             if nums[slow] == 0:
#                 break

#             fast = next_index(fast)
#             if nums[fast] == 0:
#                 break
#             fast = next_index(fast)
#             if nums[fast] == 0:
#                 break

#             if slow == fast:
#                 if slow == next_index(slow):
#                     break

#                 # Rigorous Cycle Length and Direction Check
#                 curr = next_index(slow)
#                 cycle_len = 1
#                 cycle_consistent = True
#                 first_direction = nums[slow] > 0
#                 temp_curr = slow
#                 while curr != slow:
#                     if (nums[curr] > 0) != first_direction:
#                         cycle_consistent = False
#                         break
#                     curr = next_index(curr)
#                     cycle_len += 1
#                     if cycle_len > n:
#                         break

#                 if cycle_len > 1 and cycle_consistent:
#                     return True
#                 break

#         j = i
#         while nums[j] != 0:
#             next_pos = next_index(j)
#             nums[j] = 0
#             j = next_pos
#             if j == i and nums[j] == 0:
#                 break

#     return False
