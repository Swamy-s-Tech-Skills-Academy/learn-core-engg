Below is the final consolidated version of your **Valid Palindrome (Two Pointers)** documentation with proper markdown formatting, icons, and headers. You can copy this directly into your valid-palindrome.md file.

---

# Valid Palindrome (Two Pointers)

## Problem Statement

Given a string **s**, determine if it is a palindrome. A palindrome is a word, phrase, or sequence that reads the same forward and backward. The check should ignore non-alphanumeric characters and case, meaning the input must be sanitized (converted to lowercase and stripped of non-alphanumeric characters) before performing the palindrome check.

## Example Inputs & Outputs

- ✅ **Example 1:**  
  **Input:** `"racecar"`  
  **Output:** `true`

- ✅ **Example 2:**  
  **Input:** `"A man, a plan, a canal: Panama"`  
  **Output:** `true`  
  **Explanation:** After sanitizing, the string becomes `"amanaplanacanalpanama"`, which is a palindrome.

- ❌ **Example 3:**  
  **Input:** `"hello"`  
  **Output:** `false`

## Approach

### Using Two Pointers with Input Sanitization

1. **Sanitize the Input:**

   - Convert the string to lowercase.
   - Remove any characters that are not alphanumeric.

2. **Initialize Two Pointers:**

   - Set a **left** pointer at the start of the sanitized string.
   - Set a **right** pointer at the end of the sanitized string.

3. **Compare Characters:**
   - While the left pointer is less than the right pointer:
     - Compare the characters at the left and right pointers.
     - If they do not match, return `false`.
     - Otherwise, move the left pointer one step to the right and the right pointer one step to the left.
   - If all corresponding characters match, return `true`.

### Algorithm (Pseudocode)

```
function isPalindrome(s):
    // Sanitize the input
    s = toLowerCase(s)
    s = removeNonAlphanumeric(s)

    left = 0
    right = length(s) - 1

    while left < right:
        if s[left] != s[right]:
            return false
        left += 1
        right -= 1

    return true
```

## Time Complexity Analysis

- **O(n):** Each character in the sanitized string is checked once.
- **O(1):** The two pointers use constant extra space (note: creating the sanitized string takes O(n) space).

## Edge Cases Considered

- ✅ **Single-character strings:** Always a palindrome.
- ✅ **Empty string:** Considered a palindrome.
- ✅ **Strings with spaces and punctuation:** Handled via sanitization.
- ✅ **Case differences:** Addressed by converting the string to lowercase.

## Next Steps

- Implement this algorithm in multiple programming languages.
- Explore more complex variations, such as the **Longest Palindromic Substring**.
- Optimize with additional techniques such as recursion or bitwise operations where applicable.
