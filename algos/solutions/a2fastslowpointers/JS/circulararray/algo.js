// circulararray/algo.js

function circularArrayLoop(nums) {
    const n = nums.length;

    function nextIndex(current) {
        const next = ((current + nums[current]) % n + n) % n;
        return next;
    }

    for (let i = 0; i < n; i++) {
        let slow = i;
        let fast = i;
        const direction = nums[i] > 0;

        // Helper to check if direction is consistent
        const isSameDirection = (index) => (nums[index] > 0) === direction;

        while (true) {
            const nextSlow = nextIndex(slow);
            const nextFast = nextIndex(fast);
            const nextFast2 = nextIndex(nextFast);

            if (!isSameDirection(nextSlow) || !isSameDirection(nextFast) || !isSameDirection(nextFast2)) {
                break;
            }

            slow = nextSlow;
            fast = nextFast2;

            if (slow === fast) {
                if (slow === nextIndex(slow)) {
                    // 1-element loop — invalid
                    break;
                }
                return true;
            }
        }

        // Mark all nodes in this path as visited
        let j = i;
        while (isSameDirection(j)) {
            const next = nextIndex(j);
            nums[j] = 0; // visited marker
            j = next;
        }
    }

    return false;
}

function nextStep(index, move, size) {
    let result = (index + move) % size;
    return result < 0 ? result + size : result;
}

function isNotCycle(nums, originalDir, index) {
    const currentDir = nums[index] >= 0;
    if (originalDir !== currentDir || Math.abs(nums[index] % nums.length) === 0) {
        return true;
    }
    return false;
}

module.exports = { circularArrayLoop };
