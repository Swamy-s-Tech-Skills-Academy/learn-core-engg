# Floyd's Cycle Detection Algorithm (also known as the fast & slow pointer approach)

## Description

Here’s a complete and correct solution in **JavaScript** for the **Circular Array Loop** problem using the **Floyd's Cycle Detection Algorithm** (also known as the fast & slow pointer approach):

---

### ✅ `circularArrayLoop(nums)` Implementation

```javascript
function circularArrayLoop(nums) {
  const n = nums.length;

  const nextIndex = (current, direction) => {
    const move = nums[current];
    if (move > 0 !== direction) return -1;

    let next = (current + move) % n;
    if (next < 0) next += n;

    if (next === current) return -1; // self-loop not allowed

    return next;
  };

  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let slow = i;
    let fast = i;
    const direction = nums[i] > 0;

    const localVisited = new Set();

    while (true) {
      slow = nextIndex(slow, direction);
      fast = nextIndex(fast, direction);
      if (fast !== -1) fast = nextIndex(fast, direction);

      if (slow === -1 || fast === -1 || visited[slow] || visited[fast]) break;

      if (slow === fast) return true;

      localVisited.add(slow);
      localVisited.add(fast);
    }

    // Mark all visited during this traversal
    for (const index of localVisited) {
      visited[index] = true;
    }
  }

  return false;
}

export { circularArrayLoop };
```

---

### 🧠 Key Points

- `nextIndex` calculates the next index while ensuring:
  - Movement is in the same direction (all positive or all negative).
  - No self-loop is allowed (e.g., index doesn’t point to itself).
- We use **two pointers**:
  - `slow`: moves one step.
  - `fast`: moves two steps.
- If they meet — a cycle is found.
- If any pointer becomes invalid (`-1`), we break the loop for that starting point.

---

### 🧪 Example Usage

```javascript
console.log(circularArrayLoop([2, -1, 1, 2, 2])); // true
console.log(circularArrayLoop([-1, 2])); // false
console.log(circularArrayLoop([-2, 1, -1, -2, -2])); // false
console.log(circularArrayLoop([3, 1, 2])); // true
```

---

Let me know if you want a test file (`test_algo.js`) or the same algorithm in **Python** or **TypeScript**.
