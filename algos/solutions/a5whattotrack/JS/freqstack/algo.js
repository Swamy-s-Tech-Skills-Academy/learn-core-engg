// freqstack/algo.js

// Declare a FreqStack containing frequency and group hashmaps
// and maxFrequency integer
var FreqStack = function() {
    this.frequency = {};      // Map value -> frequency
    this.group = {};          // Map frequency -> stack of values
    this.maxFrequency = 0;    // Current maximum frequency
    this.pushCount = 0;       // Counter to track push sequence
    this.lastPushed = {};     // Map value -> last push position
}

// Use push function to push the value into the FreqStack
FreqStack.prototype.push = function(value) {
    this.pushCount++;
    this.lastPushed[value] = this.pushCount;
    
    // Get current frequency and increment
    let freq = (this.frequency[value] || 0) + 1;
    
    // Update frequency
    this.frequency[value] = freq;
    
    // Update max frequency
    if (freq > this.maxFrequency) {
        this.maxFrequency = freq;
    }
    
    // Add to the group stack
    if (!this.group[freq]) {
        this.group[freq] = [];
    }
    this.group[freq].push(value);
}

FreqStack.prototype.pop = function() {
    if (this.maxFrequency === 0) return -1;
    
    // Get all values with max frequency
    const candidates = this.group[this.maxFrequency];
    
    // Find the most recently pushed value (if multiple options)
    let maxIdx = candidates.length - 1;
    
    // If we have multiple candidates with the same frequency
    // we need to check which one was pushed most recently
    if (this.maxFrequency === 1 && candidates.length > 1) {
        let mostRecentValue = candidates[maxIdx];
        let mostRecentTime = this.lastPushed[mostRecentValue];
        
        for (let i = candidates.length - 2; i >= 0; i--) {
            const value = candidates[i];
            if (this.lastPushed[value] > mostRecentTime) {
                mostRecentValue = value;
                mostRecentTime = this.lastPushed[value];
                maxIdx = i;
            }
        }
    }
    
    // Remove the candidate
    const value = candidates.splice(maxIdx, 1)[0];
    
    // Decrement its frequency
    this.frequency[value]--;
    
    // If no more elements with current max frequency, decrement maxFrequency
    if (this.group[this.maxFrequency].length === 0) {
        delete this.group[this.maxFrequency];
        this.maxFrequency--;
    }
    
    return value;
}

module.exports = { FreqStack };