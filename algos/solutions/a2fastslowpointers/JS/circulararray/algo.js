// circulararray/algo.js

function circularArrayLoop(nums) {
    const n = nums.length;
    const visited = new Array(n).fill(false); // Track visited nodes

    function nextIndex(current) {
        return ((current + nums[current]) % n + n) % n;
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue; // Skip already visited nodes

        console.log(`Starting new traversal from index ${i}`);

        let slow = i;
        let fast = i;
        const direction = nums[i] > 0;

        const isSameDirection = (index) => nums[index] !== 0 && (nums[index] > 0) === direction;

        while (true) {
            const nextSlow = nextIndex(slow);
            const nextFast = nextIndex(fast);
            const nextFast2 = nextIndex(nextFast);

            console.log(`slow: ${slow}, nextSlow: ${nextSlow}, fast: ${fast}, nextFast2: ${nextFast2}`);

            if (!isSameDirection(nextSlow) || !isSameDirection(nextFast) || !isSameDirection(nextFast2)) {
                console.log(`Breaking loop due to direction mismatch at index ${slow}`);
                break;
            }

            slow = nextSlow;
            fast = nextFast2;

            if (slow === fast) {
                if (slow === nextIndex(slow)) {
                    console.log(`Single-element loop detected at index ${slow}, breaking.`);
                    break;
                }

                let cycleLength = 1;
                let current = nextIndex(slow);

                while (current !== slow) {
                    if (!isSameDirection(current)) {
                        console.log(`Cycle broken due to direction mismatch at index ${current}`);
                        cycleLength = 0;
                        break;
                    }
                    cycleLength++;
                    current = nextIndex(current);
                }

                if (cycleLength > 1) {
                    console.log(`Valid cycle detected starting at index ${i}`);
                    return true;
                }
                break;
            }
        }

        let j = i;
        while (isSameDirection(j) && !visited[j]) {
            const next = nextIndex(j);
            console.log(`Marking index ${j} as visited.`);
            visited[j] = true;
            nums[j] = 0; // Mark as processed to avoid revisiting
            j = next;
        }
    }

    console.log(`No valid cycle found in the array.`);
    return false;
}

module.exports = { circularArrayLoop };
