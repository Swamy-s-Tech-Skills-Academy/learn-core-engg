// circulararray/algo.js

function circularArrayLoop(nums) {
    const n = nums.length;
    const visited = new Array(n).fill(false); // Track visited nodes

    function nextIndex(current) {
        const next = ((current + nums[current]) % n + n) % n;
        return next;
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue; // Skip already visited nodes

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

                // Ensure the cycle length is greater than 1 and involves distinct indices
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
        while (isSameDirection(j) && !visited[j]) {
            const next = nextIndex(j);
            visited[j] = true; // Mark as visited
            j = next;
        }
    }

    return false;
}

module.exports = { circularArrayLoop };
