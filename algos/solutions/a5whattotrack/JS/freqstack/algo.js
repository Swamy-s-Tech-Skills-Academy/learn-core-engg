// freqstack/algo.js

class FreqStack {
  constructor() {
    this.frequency = {}; // Tracks frequency of each value
    this.group = {};     // Groups values by their frequency
    this.maxFrequency = 0; // Tracks maximum frequency
  }

  push(value) {
    // Increment frequency for this value
    let freq = (this.frequency[value] ? this.frequency[value] : 0) + 1;
    this.frequency[value] = freq;

    // Update maxFrequency if needed
    if (freq > this.maxFrequency) this.maxFrequency = freq;

    // Add value to its frequency group
    this.group[freq]
      ? this.group[freq].push(value)
      : (this.group[freq] = [value]);
  }

  pop() {
    let value = "";

    if (this.maxFrequency > 0) {
      // Remove the most recent element with the highest frequency
      value = this.group[this.maxFrequency].pop();
      
      // Decrement the frequency of the removed value
      this.frequency[value]--;

      // If no more elements at current max frequency, reduce maxFrequency
      if (this.group[this.maxFrequency].length <= 0)
        this.maxFrequency--;
    } else return -1;

    return value;
  }
}

module.exports = { FreqStack };