# Three Sum

## Problem Statement

Given an integer array `nums`, find and return all unique triplets `[nums[i], nums[j], nums[k]]` such that `i`, `j`, and `k` are distinct indices and the sum of the three numbers equals zero (i.e., `nums[i] + nums[j] + nums[k] == 0`).

## Constraints

- **3 ≤ nums.length ≤ 500**
- **-10³ ≤ nums[i] ≤ 10³**

## Example Inputs & Outputs

#### ✅ Example 1:

```
Input: [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
```

#### ✅ Example 2:

```
Input: [1, 2, 3, 4, 5]
Output: []  // No triplet sums to zero.
```

#### ✅ Example 3:

```
Input: [0, 0, 0, 0]
Output: [[0, 0, 0]]
```

## Approach

1. **Sort the array** in ascending order.
2. **Iterate** through the array, treating each element as a pivot.
   - For each pivot, use two pointers: one starting immediately after the pivot (`left`) and one at the end of the array (`right`).
3. **Skip duplicate elements** for the pivot and for the two pointers to ensure each triplet is unique.
4. **Adjust the pointers**:
   - If the total is less than zero, move the `left` pointer to the right.
   - If the total is greater than zero, move the `right` pointer to the left.
   - If the total equals zero, record the triplet and then move both pointers while skipping duplicates.

### Algorithm (Pseudocode)

```
function threeSum(nums):
    sort(nums)
    result = []
    for i = 0 to length(nums) - 2:
        if nums[i] > 0:
            break
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left = i + 1
        right = length(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                add [nums[i], nums[left], nums[right]] to result
                left = left + 1
                right = right - 1
                while left < right and nums[left] == nums[left - 1]:
                    left = left + 1
                while left < right and nums[right] == nums[right + 1]:
                    right = right - 1
            else if total < 0:
                left = left + 1
            else:
                right = right - 1
    return result
```

## Time Complexity Analysis

- **O(n²):** The worst-case time complexity is O(n²) due to the nested two-pointer scan within the loop.
- **Space Complexity:** O(n) for sorting and storing the output.

## Edge Cases Considered

✅ **No valid triplets:** Returns an empty array.  
✅ **Multiple zeros:** Returns one unique triplet (i.e., `[0, 0, 0]`).  
✅ **Duplicate elements:** Are skipped to avoid repeated triplets.  
✅ **Arrays with only positive or only negative numbers:** Correctly handled.

## Next Steps

- Implement this algorithm in multiple programming languages.
- Develop a suite of tests (e.g., using Jest for JavaScript) to validate the solution.
- Consider additional edge cases and potential optimizations if needed.
