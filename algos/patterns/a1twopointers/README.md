# Two Pointers Pattern

## Introduction to Two Pointers

The **Two Pointers** pattern is a **versatile problem-solving technique** used for efficiently **traversing or manipulating sequential data structures** like arrays, strings, and linked lists.

Instead of using **nested loops** (which often lead to **O(n²) complexity**), this pattern allows us to **optimize solutions to O(n) by strategically moving two pointers.**

## How It Works

- Two pointers are placed at **different positions** in the data structure.
- These pointers move **either towards or away from each other** depending on the conditions of the problem.
- The movement of the pointers is dynamic and **depends on specific conditions** like sorting order, symmetry, or constraints.

## When to Use Two Pointers

This pattern is a strong choice when all the following conditions are met:

✅ **Linear Data Structure:**  
 The input data can be **traversed sequentially** (e.g., **array, string, linked list**).

✅ **Processing Pairs of Elements:**  
 The problem involves comparing, summing, or manipulating **two elements at a time**.

✅ **Dynamic Pointer Movement:**

- Pointers **move based on specific conditions** (e.g., increasing sum, palindrome matching).
- Pointers may traverse **the same data structure** or **two different structures**.

## Real-World Applications

### 1️⃣ Memory Management

- Used in **dynamic memory allocation** where one pointer represents the **start of available memory**, and another represents **the end of the allocated block**.
- Helps in **compacting memory and preventing fragmentation**.

### 2️⃣ Reversing an Array (In-Place)

- Swap elements using **two pointers (start and end)** moving towards the center.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### 3️⃣ Sorting and Merging Algorithms

- **Merge Sort:** Uses two pointers to merge two sorted arrays efficiently.
- **Quick Sort (Partition Step):** Uses a two-pointer approach for partitioning the array.

## Example Problems Solved with Two Pointers

| **Problem**                    | **Example Input**                       | **Solution Approach**                                         |
| ------------------------------ | --------------------------------------- | ------------------------------------------------------------- |
| **Valid Palindrome**           | "racecar" → ✅                          | Compare characters from both ends.                            |
| **Pair Sum in a Sorted Array** | `[1, 2, 3, 4, 6]`, target = 7 → `(1,6)` | Start pointers at both ends, adjust based on sum.             |
| **Move Zeros to End**          | `[0,1,0,3,12]` → `[1,3,12,0,0]`         | Swap non-zero elements forward.                               |
| **Container with Most Water**  | `[1,8,6,2,5,4,8,3,7]` → `49`            | Move pointer with **smaller height** inward to maximize area. |

## Key Takeaways

✅ **Reduces time complexity from O(n²) to O(n).**  
✅ **Best suited for problems with ordered, paired, or mirrored conditions.**  
✅ **Widely used in searching, sorting, merging, and partitioning problems.**

## Next Steps

1. **✅ Implement Two Pointers problems in `solutions/a1twopointers/JS/`.**
2. **✅ Document problem statements inside `problems/a1twopointers/`.**
3. **🔜 Start working on Pair Sum and Container With Most Water next.**
