# Problem: Valid Palindrome

## Difficulty: Easy

### **Problem Statement**

Given a string `s`, determine whether it is a palindrome. A palindrome is a word, phrase, or sequence that reads the same forward and backward, ignoring non-alphanumeric characters and case sensitivity.

### **Constraints**

- The input string `s` can contain letters, numbers, spaces, and special characters.
- Ignore case sensitivity (i.e., "A" and "a" are considered the same).
- Ignore all non-alphanumeric characters (spaces, punctuation, etc.).

### **Example Inputs & Outputs**

#### ✅ Example 1:

```
Input: "racecar"
Output: true
```

#### ✅ Example 2:

```
Input: "A man, a plan, a canal: Panama"
Output: true
Explanation: Ignoring non-alphanumeric characters and case, the string reads "amanaplanacanalpanama" which is a palindrome.
```

#### ❌ Example 3:

```
Input: "hello"
Output: false
```

### **Follow-Up Questions**

1. What if we need to check for palindrome ignoring all whitespace?
2. How would you optimize this for very large strings?

### **Related Problems**

- Longest Palindromic Substring (Medium)
- Palindrome Partitioning (Hard)

---

### **Next Steps**

- Implement this problem in `solutions/a1twopointers/JS/palindrome/algo.js`.
- Add test cases in `solutions/a1twopointers/JS/palindrome/alog.test.js`.
- Optimize for different input variations.
