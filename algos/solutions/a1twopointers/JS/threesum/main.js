// File: main.js

const { threeSum } = require('./algo');

function main() { 
    const nums = [-1, 0, 1, 2, -1, -4]; 
    const triplets = threeSum(nums);

    console.log("Input:", nums);
    console.log("Unique triplets that sum to zero:", triplets);
}

main();