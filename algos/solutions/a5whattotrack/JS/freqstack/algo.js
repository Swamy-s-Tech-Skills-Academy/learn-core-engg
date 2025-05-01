// freqstack/algo.js
// A frequency stack implementation that returns most frequent elements
// If there's a tie, it returns the most recently added element

var FreqStack = function() {
    this.frequency = {};       // Map value -> frequency
    this.group = {};           // Map frequency -> stack of values
    this.maxFrequency = 0;     // Current maximum frequency
}

// Push a value onto the stack
FreqStack.prototype.push = function(value) {
    let freq = (this.frequency[value] ? this.frequency[value] : 0) + 1;
    this.frequency[value] = freq;

    if (freq > this.maxFrequency) this.maxFrequency = freq;

    this.group[freq]
        ? this.group[freq].push(value)
        : (this.group[freq] = [value]);
}

// Pop and return the most frequent element
// If there's a tie, return the most recently added one
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

// Export using required format for tests
module.exports = { FreqStack };