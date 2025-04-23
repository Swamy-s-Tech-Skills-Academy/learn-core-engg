// freqstack/algo.js

class FreqStack {
  constructor() {
    this.frequency = {};      // Map value -> frequency
    this.group = {};          // Map frequency -> stack of values
    this.maxFrequency = 0;    // Current maximum frequency
  }

  push(val) {
    // Get current frequency and increment
    const freq = (this.frequency[val] || 0) + 1;
    
    // Update frequency
    this.frequency[val] = freq;
    
    // Update max frequency
    if (freq > this.maxFrequency) {
      this.maxFrequency = freq;
    }
    
    // Add to the group stack
    if (this.group[freq]) {
      this.group[freq].push(val);
    } else {
      this.group[freq] = [val];
    }
  }

  pop() {
    // If no elements in the stack
    if (this.maxFrequency === 0) return -1;
    
    // Get the most recent element with max frequency
    const val = this.group[this.maxFrequency].pop();
    
    // Decrement frequency
    this.frequency[val]--;
    
    // If no more elements with current max frequency, decrement maxFrequency
    if (this.group[this.maxFrequency].length === 0) {
      this.maxFrequency--;
    }
    
    return val;
  }
}

// Driver code for testing (commented out as it's exported as a module)
/*
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
*/

module.exports = { FreqStack };