// freqstack/algo.js

class FreqStack {
  constructor() {
    this.frequency = {};    // Map to store frequency of elements
    this.group = {};        // Map to store stacks for each frequency
    this.maxFrequency = 0;  // Current maximum frequency
    this.pushOrder = [];    // Array to store elements in their push order
  }

  push(value) {
    // Increment frequency for this value
    let freq = (this.frequency[value] || 0) + 1;
    this.frequency[value] = freq;

    // Update maxFrequency if needed
    if (freq > this.maxFrequency) {
      this.maxFrequency = freq;
    }

    // Create stack for this frequency if it doesn't exist
    if (!this.group[freq]) {
      this.group[freq] = [];
    }
    
    // Push value to the stack
    this.group[freq].push(value);
    
    // Also add to pushOrder to track overall insertion order
    this.pushOrder.push(value);
  }

  pop() {
    if (this.maxFrequency === 0) return -1;

    // Get the stack with highest frequency
    const stack = this.group[this.maxFrequency];
    
    // Find the most recently added value with the current max frequency
    let mostRecentIndex = -1;
    let mostRecentValue = null;
    
    // We search backward through pushOrder to find most recent value with max frequency
    for (let i = this.pushOrder.length - 1; i >= 0; i--) {
      const val = this.pushOrder[i];
      if (this.frequency[val] === this.maxFrequency) {
        mostRecentIndex = i;
        mostRecentValue = val;
        break;
      }
    }
    
    // Remove this value from pushOrder
    if (mostRecentIndex !== -1) {
      this.pushOrder.splice(mostRecentIndex, 1);
    }
    
    // Remove the value from its frequency stack
    const valueIndex = stack.lastIndexOf(mostRecentValue);
    if (valueIndex !== -1) {
      stack.splice(valueIndex, 1);
    }
    
    // Decrement frequency of this value
    this.frequency[mostRecentValue]--;
    
    // If no more elements with current maxFrequency, decrease it
    if (stack.length === 0) {
      delete this.group[this.maxFrequency];
      this.maxFrequency--;
    }
    
    return mostRecentValue;
  }
}

module.exports = { FreqStack };