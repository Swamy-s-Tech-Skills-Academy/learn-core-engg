// findduplicate/algo.js

function findDuplicate(nums) {
    let fast = nums[0];
    let slow = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    slow = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return fast;
}

module.exports = { findDuplicate };
