# Maximum Frequency Stack

## Problem Statement

Design a stack-like data structure. You should be able to push elements to this data structure and pop elements with maximum frequency.

You’ll need to implement the FreqStack class that should consist of the following:

FreqStack: This is a class used to declare a frequency stack.

Push(value): This is used to push an integer data onto the top of the stack.

Pop(): This is used to remove and return the most frequent element in the stack.

Note: If there is a tie for the most frequent element, then the most recently pushed element is removed and returned.

Constraints:

0
≤
0≤
value
≤
1
0
4
≤10
4

At most,
2
×
1
0
3
2×10
3

calls will be made to Push() and Pop().

It is guaranteed that there will be at least one element in the stack before calling Pop().

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

## Another Version

// Declare a FreqStack containing frequency and group hashmaps
// and maxFrequency integer

var FreqStack = function() {
this.frequency = {};
this.group = {};
this.maxFrequency = 0;
}

// Use push function to push the value into the FreqStack
FreqStack.prototype.push = function(value) {
let freq = (this.frequency[value] ? this.frequency[value] : 0) + 1;
this.frequency[value] = freq;

    if (freq > this.maxFrequency) this.maxFrequency = freq;

    this.group[freq]
        ? this.group[freq].push(value)
        : (this.group[freq] = [value]);

}

FreqStack.prototype.pop = function() {
let value = "";

    if (this.maxFrequency > 0) {
        value = this.group[this.maxFrequency].pop();
        this.frequency[value]--;

        if (this.group[this.maxFrequency].length <= 0)
            this.maxFrequency--;
    } else return -1;

    return value;

};

// Driver code
function main() {
let inputs = [5, 7, 7, 7, 4, 5, 3];
let obj = new FreqStack();
console.log("\t Input Stack: ", inputs, "\n");

    inputs.forEach((i) => {
        obj.push(i);
    });

    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + ".\t Popping out the most frequent value... ");
        console.log("\t Value removed from stack is: ", obj.pop());
        console.log("-".repeat(100));
    }

}

main();
