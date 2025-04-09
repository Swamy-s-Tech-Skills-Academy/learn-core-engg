// circulararray/algo.js

function circularArrayLoop(nums) {
    const n = nums.length;
    const visited = new Array(n).fill(false); // Track visited nodes

    function nextIndex(current) {
        const next = ((current + nums[current]) % n + n) % n;
        console.log(`nextIndex(${current}) → ${next}`); // Debug log
        return next;
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            console.log(`Index ${i} already visited. Skipping.`); // Debug log
            continue; // Skip already visited nodes
        }

        let slow = i;
        let fast = i;
        const direction = nums[i] > 0;
        console.log(`Starting at index ${i}, direction: ${direction ? 'positive' : 'negative'}`); // Debug log

        // Helper to check if direction is consistent
        const isSameDirection = (index) => nums[index] !== 0 && (nums[index] > 0) === direction;

        while (true) {
            const nextSlow = nextIndex(slow);
            const nextFast = nextIndex(fast);
            const nextFast2 = nextIndex(nextFast);

            console.log(`slow: ${slow}, nextSlow: ${nextSlow}, fast: ${fast}, nextFast2: ${nextFast2}`); // Debug log

            // Break if direction changes or we encounter a visited node
            if (!isSameDirection(nextSlow) || !isSameDirection(nextFast) || !isSameDirection(nextFast2)) {
                console.log('Direction changed or visited node encountered. Breaking loop.'); // Debug log
                break;
            }

            slow = nextSlow;
            fast = nextFast2;

            // Check for a valid cycle
            if (slow === fast) {
                if (slow === nextIndex(slow)) {
                    console.log('Single-element loop detected. Breaking loop.'); // Debug log
                    break;
                }

                // Ensure the cycle length is greater than 1 and involves distinct indices
                let cycleLength = 1;
                let current = nextIndex(slow);
                const visitedInCycle = new Set();
                visitedInCycle.add(slow);

                while (current !== slow) {
                    if (!isSameDirection(current) || visitedInCycle.has(current)) {
                        console.log('Invalid cycle detected due to direction change or revisiting index.'); // Debug log
                        cycleLength = 0; // Invalid cycle
                        break;
                    }
                    visitedInCycle.add(current);
                    cycleLength++;
                    current = nextIndex(current);
                }

                console.log(`Cycle detected with length: ${cycleLength}`); // Debug log

                if (cycleLength > 1) {
                    // Additional check: Ensure no index is revisited within the cycle
                    const cycleIndices = Array.from(visitedInCycle);
                    const uniqueIndices = new Set(cycleIndices);
                    if (cycleIndices.length === uniqueIndices.size) {
                        return true;
                    } else {
                        console.log('Cycle contains revisited indices. Invalid cycle.'); // Debug log
                    }
                }
                break;
            }
        }

        // Mark all nodes in this path as visited
        let j = i;
        while (isSameDirection(j) && !visited[j]) {
            const next = nextIndex(j);
            console.log(`Marking index ${j} as visited.`); // Debug log
            visited[j] = true; // Mark as visited
            j = next;
        }
    }

    return false;
}

module.exports = { circularArrayLoop };
