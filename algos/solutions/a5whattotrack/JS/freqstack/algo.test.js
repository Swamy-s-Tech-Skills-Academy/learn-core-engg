// freqstack/algo.test.js

const { FreqStack } = require('./algo');

describe('FreqStack', () => {
  test('Example 1: Basic frequency-based popping', () => {
    const stack = new FreqStack();
    stack.push(5);
    stack.push(7);
    stack.push(5);
    stack.push(7);
    stack.push(4);
    stack.push(5);
    
    // 5 appears 3 times (most frequent)
    expect(stack.pop()).toBe(5);
    
    // 5 and 7 both appear twice, but 7 was pushed more recently
    expect(stack.pop()).toBe(7);
    
    // 5 still appears twice
    expect(stack.pop()).toBe(5);
    
    // 4 and 7 both appear once, but 4 was pushed more recently
    expect(stack.pop()).toBe(4);
    
    // 7 appears once
    expect(stack.pop()).toBe(7);
    
    // Only 5 remains
    expect(stack.pop()).toBe(5);
  });

  test('Example 2: From driver code in ReadMe', () => {
    const stack = new FreqStack();
    const inputs = [5, 7, 7, 7, 4, 5, 3];
    
    // Push all inputs
    inputs.forEach(value => stack.push(value));
    
    // Expected popping order based on frequency and recency
    expect(stack.pop()).toBe(7); // 7 appears 3 times (most frequent)
    expect(stack.pop()).toBe(5); // 5 appears twice, most recent of the ties
    expect(stack.pop()).toBe(7); // 7 appears twice now
    expect(stack.pop()).toBe(4); // 3, 4, 5, 7 all appear once, 4 most recent
    expect(stack.pop()).toBe(3); // 3, 5, 7 all appear once, 3 most recent
    expect(stack.pop()).toBe(5); // 5, 7 both appear once, 5 most recent 
    expect(stack.pop()).toBe(7); // Only 7 remains
  });

  test('Edge case: Empty stack after all pops', () => {
    const stack = new FreqStack();
    stack.push(1);
    stack.push(2);
    
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    // This would return -1 as per implementation, but ReadMe states
    // it's guaranteed there will be at least one element before popping
  });
});