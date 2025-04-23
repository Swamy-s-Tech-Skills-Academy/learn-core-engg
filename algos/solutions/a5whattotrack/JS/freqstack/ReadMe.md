# Maximum Frequency Stack

## ✅ Explanation:

- We maintain a frequency map `freq` to track how many times each value appears.
- We maintain a map `group` where keys are frequencies and values are stacks (arrays) of elements with that frequency.
- We also track the current maximum frequency `maxFreq`.
- On `push(value)`: we increase the value’s frequency and push it onto the corresponding frequency stack.
- On `pop()`: we remove and return the top element from the stack of `maxFreq`. If that stack becomes empty, we decrease `maxFreq`.

---

### ✅ Code:

```js
var FreqStack = function () {
  this.freq = new Map(); // Map to store frequency of elements
  this.group = new Map(); // Map to store stacks for each frequency
  this.maxFreq = 0; // Current maximum frequency
};

FreqStack.prototype.push = function (value) {
  let f = this.freq.get(value) || 0;
  f++;
  this.freq.set(value, f);

  if (!this.group.has(f)) {
    this.group.set(f, []);
  }
  this.group.get(f).push(value);

  this.maxFreq = Math.max(this.maxFreq, f);
};

FreqStack.prototype.pop = function () {
  let stack = this.group.get(this.maxFreq);
  let value = stack.pop();

  // Decrease frequency
  this.freq.set(value, this.freq.get(value) - 1);

  // If no more elements at this frequency, reduce maxFreq
  if (stack.length === 0) {
    this.group.delete(this.maxFreq);
    this.maxFreq--;
  }

  return value;
};

export { FreqStack };
```

---

### 🔁 Example Usage:

```js
const stack = new FreqStack();
stack.push(5);
stack.push(7);
stack.push(5);
stack.push(7);
stack.push(4);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 7
console.log(stack.pop()); // 5
console.log(stack.pop()); // 4
```

Let me know if you'd like a TypeScript version or test cases to go along with this!
