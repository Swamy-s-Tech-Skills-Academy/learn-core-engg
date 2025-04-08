function circularArrayLoop(nums) {
    const size = nums.length;

    for (let i = 0; i < size; i++) {
        let slow = i;
        let fast = i;
        const forward = nums[i] > 0;

        while (true) {
            slow = nextStep(slow, nums[slow], size);
            if (isNotCycle(nums, forward, slow)) break;

            fast = nextStep(fast, nums[fast], size);
            if (isNotCycle(nums, forward, fast)) break;

            fast = nextStep(fast, nums[fast], size);
            if (isNotCycle(nums, forward, fast)) break;

            if (slow === fast) return true;
        }
    }

    return false;
}

function nextStep(pointer, value, size) {
    let result = (pointer + value) % size;
    return result >= 0 ? result : result + size;
}

function isNotCycle(nums, prevDirection, pointer) {
    const currDirection = nums[pointer] >= 0;
    return prevDirection !== currDirection || nums[pointer] % nums.length === 0;
}

module.exports = {
    circularArrayLoop,
    nextStep,
    isNotCycle
};
