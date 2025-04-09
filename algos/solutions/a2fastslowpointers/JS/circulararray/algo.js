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
        const isSameDirection = (index) => nums[index] !== 0 && (nums[index] > 0) === direction;

        while (true) {
            const nextSlow = nextIndex(slow);
            const nextFast = nextIndex(fast);
            const nextFast2 = nextIndex(nextFast);

            // Break if direction changes or we encounter a visited node
            if (!isSameDirection(nextSlow) || !isSameDirection(nextFast) || !isSameDirection(nextFast2)) {
                break;
            }

            slow = nextSlow;
            fast = nextFast2;

            // Check for a valid cycle
            if (slow === fast) {
                if (slow === nextIndex(slow)) {
                    // Single-element loop — invalid
                    break;
                }

                // Ensure the cycle length is greater than 1
                let cycleLength = 1;
                let current = nextIndex(slow);
                const visitedInCycle = new Set();
                visitedInCycle.add(slow);

                while (current !== slow) {
                    if (!isSameDirection(current) || visitedInCycle.has(current)) {
                        cycleLength = 0; // Invalid cycle
                        break;
                    }
                    visitedInCycle.add(current);
                    cycleLength++;
                    current = nextIndex(current);
                }

                if (cycleLength > 1) {
                    return true;
                }
                break;
            }
        }

        // Mark all nodes in this path as visited
        let j = i;
        while (isSameDirection(j)) {
            const next = nextIndex(j);
            nums[j] = 0; // Mark as visited
            j = next;
        }
    }

    return false;
}

module.exports = { circularArrayLoop };
