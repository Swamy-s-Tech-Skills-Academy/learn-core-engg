// freqstack/helper_freqstack.js

function showFreqStackDemo(FreqStack) {
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

module.exports = { showFreqStackDemo };