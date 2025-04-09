// circulararray/algo.js

function circularArrayLoop(nums) {
    const n = nums.length;

    // Helper function to calculate the next index
    const nextIndex = (current) => {
        return ((current + nums[current]) % n + n) % n; // Ensure positive modulo
    };

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue; // Skip already visited elements

        let slow = i, fast = i;
        const direction = nums[i] > 0; // Determine the direction of the loop

        while (true) {
            slow = nextIndex(slow);
            if (nums[slow] === 0 || (nums[slow] > 0) !== direction) break;

            fast = nextIndex(fast);
            if (nums[fast] === 0 || (nums[fast] > 0) !== direction) break;

            fast = nextIndex(fast);
            if (nums[fast] === 0 || (nums[fast] > 0) !== direction) break;

            if (slow === fast) {
                if (slow === nextIndex(slow)) break; // Single-element loop
                return true;
            }
        }

        // Mark all elements in the current path as visited
        let current = i;
        while (nums[current] !== 0) {
            const next = nextIndex(current);
            nums[current] = 0;
            current = next;
        }
    }

    return false;
}

module.exports = circularArrayLoop;
