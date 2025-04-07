# Stacks

Here's the JavaScript solution for the **"Remove All Adjacent Duplicates In String"** problem using a **stack-based approach**, which is efficient and clean:

---

### ✅ **`removeDuplicates(s)` Implementation**

```javascript
export function removeDuplicates(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop(); // Remove the duplicate
    } else {
      stack.push(char); // Add current char
    }
  }

  return stack.join("");
}
```

---

### 📘 **How It Works**

- We use a stack (`[]`) to keep track of characters.
- If the current character matches the last character in the stack, it's a duplicate → we `pop()`.
- Otherwise, we `push()` it to the stack.
- Finally, join the stack to return the modified string.

---

### 🧪 Example Usage

```javascript
console.log(removeDuplicates("abbaca")); // Output: "ca"
console.log(removeDuplicates("azxxzy")); // Output: "ay"
console.log(removeDuplicates("a")); // Output: "a"
console.log(removeDuplicates("aa")); // Output: ""
```

---

Let me know if you’d like a unit test suite or a Python version too!
