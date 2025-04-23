// freqstack/algo.js

class FreqStack {
  constructor() {
    this.frequency = {};    // Tracks frequency of each value
    this.group = {};        // Groups values by their frequency
    this.maxFrequency = 0;  // Tracks maximum frequency
    this.pushOrder = [];    // Tracks the order of pushed elements
  }

  push(value) {
    // Increment frequency for this value
    const freq = (this.frequency[value] || 0) + 1;
    this.frequency[value] = freq;

    // Update maxFrequency if needed
    if (freq > this.maxFrequency) {
      this.maxFrequency = freq;
    }

    // Store value in group by frequency
    if (!this.group[freq]) {
      this.group[freq] = [];
    }
    this.group[freq].push(value);

    // Track the push order
    this.pushOrder.push(value);
  }

  pop() {
    if (this.maxFrequency === 0) return -1;

    // Get the group with the highest frequency
    const group = this.group[this.maxFrequency];
    
    // Get the most recently pushed value from this group
    // To do this, we search from the end of the pushOrder array
    let value = null;
    for (let i = this.pushOrder.length - 1; i >= 0; i--) {
      const candidate = this.pushOrder[i];
      if (this.frequency[candidate] === this.maxFrequency) {
        value = candidate;
        // Remove this value from pushOrder
        this.pushOrder.splice(i, 1);
        break;
      }
    }
    
    // Remove the value from its frequency group
    const index = group.lastIndexOf(value);
    if (index !== -1) {
      group.splice(index, 1);
    }
    
    // Update frequency map
    this.frequency[value]--;
    
    // If the group is now empty, update maxFrequency
    if (group.length === 0) {
      delete this.group[this.maxFrequency];
      this.maxFrequency--;
    }
    
    return value;
  }
}

module.exports = { FreqStack };