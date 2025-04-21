# What to Track

## Palindrome Permutation problem using an efficient approach.

---

## ✅ Problem Recap

You are given a string `st` and you need to determine whether any **permutation** of the string can form a **palindrome**.

---

## 🔍 Key Insight

A string can be permuted into a **palindrome** if:

- For **even-length** strings: all characters must occur **even** number of times.
- For **odd-length** strings: **only one** character can occur an **odd** number of times.

So we just need to count the frequency of each character and ensure that at most **one character has an odd count**.

---

## ✅ Final JavaScript Code

```js
function permutePalindrome(st) {
  const freq = new Map();

  // Count character frequencies
  for (const char of st) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // Count number of characters with odd frequency
  let oddCount = 0;
  for (const count of freq.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}

export { permutePalindrome };
```

---

## 🧪 Example Cases

| Input         | Output  | Explanation                          |
| ------------- | ------- | ------------------------------------ |
| `"civic"`     | `true`  | Already a palindrome                 |
| `"ivicc"`     | `true`  | Can be rearranged to "civic"         |
| `"hello"`     | `false` | Cannot be rearranged to a palindrome |
| `"aabbcc"`    | `true`  | Even count of all                    |
| `"aabbccd"`   | `true`  | Only one odd-count char: 'd'         |
| `"aabbccddf"` | `true`  | Only one odd-count char: 'f'         |
| `"aabbccdde"` | `false` | More than one odd-count char         |

---

Would you like me to add test cases using Jest next?
