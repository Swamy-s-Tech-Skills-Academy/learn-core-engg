# Two Pointers Pattern

## Overview

The **Two Pointers** technique is an efficient way to solve problems that involve searching, sorting, or comparing elements in a sequence. Instead of using nested loops (O(n^2) complexity), we use two pointers that traverse the sequence strategically to reduce time complexity to O(n) or O(log n).

## When to Use

- The problem involves **sorted arrays or lists**.
- The problem requires **finding pairs or subarrays** that satisfy a condition.
- The problem involves **modifying a sequence in-place** (e.g., removing duplicates).
- The problem requires **checking for symmetry** (e.g., palindromes).

## Common Variations

1. **Opposite Direction Pointers**

   - Used in problems where two pointers start at opposite ends and move toward each other.
   - Example: **Checking if a string is a palindrome**.

2. **Same Direction Pointers (Sliding Window)**

   - Used in problems where two pointers move in the same direction.
   - Example: **Finding a subarray with a given sum**.

3. **Fast and Slow Pointers**
   - One pointer moves faster than the other (e.g., Floyd's cycle detection algorithm).
   - Example: **Detecting a cycle in a linked list**.

## Example Problems

### 1️⃣ Valid Palindrome (Easy)

**Problem Statement:**

- Given a string `s`, determine if it is a palindrome (ignoring non-alphanumeric characters and case sensitivity).
- **Example:**

```text
  Input: "racecar"
  Output: true
```

- **Solution:** Use two pointers, one at the start and one at the end, comparing characters while moving inward.

### 2️⃣ Pair Sum in a Sorted Array (Medium)

**Problem Statement:**

- Given a sorted array and a target sum, find two numbers that add up to the target.
- **Example:**

  ```text
  Input: [1, 2, 3, 4, 6], target = 7
  Output: (1, 6) or (3, 4)
  ```

- **Solution:** Start one pointer at the leftmost element and one at the rightmost. Move inward based on sum comparison.

### 3️⃣ Container With Most Water (Hard)

**Problem Statement:**

- Given an array representing heights, find two heights that can hold the most water.
- **Example:**

  ```text
  Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
  Output: 49
  ```

- **Solution:** Use two pointers, adjusting based on the smaller height.

## Complexity Analysis

- **Time Complexity:** Most two-pointer problems run in O(n) time.
- **Space Complexity:** O(1) since no extra data structures are used.

## Summary

✅ **Two Pointers reduce brute-force approaches from O(n^2) to O(n).**  
✅ **Look for sorted arrays, symmetry, or pair-based conditions.**  
✅ **Efficient for solving problems involving searching, modifying, or comparing elements in a sequence.**
