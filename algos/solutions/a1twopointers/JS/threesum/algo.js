// File: algo.js

function threeSum(nums) {
    // Sort the array in ascending order. 
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    // Iterate through the array using each number as the pivot.
    for (let i = 0; i < n - 2; i++) {
        
        // If the current number is greater than 0, no triplet can sum to zero.
        if (nums[i] > 0) break;
        
        // Skip duplicate pivot values.
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;

        // Use two pointers to find the remaining two numbers.
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // Skip duplicates for the left pointer.
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                // Skip duplicates for the right pointer.
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

module.exports = { threeSum };