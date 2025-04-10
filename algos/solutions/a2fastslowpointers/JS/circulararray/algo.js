// circulararray/algo.js

/**
 * Detects whether a circular array contains a valid cycle.
 * A valid cycle:
 *  - Moves in one direction only (all + or all -)
 *  - Has length > 1 (no self‑loops)
 */
function circularArrayLoop(nums) {
    const n = nums.length;
    const next = (i) => ((i + nums[i]) % n + n) % n;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;

        const dir = nums[i] > 0;
        // if it immediately loops to itself, mark and skip
        if (next(i) === i) {
            nums[i] = 0;
            continue;
        }

        let slow = i, fast = i;
        while (true) {
            // advance slow one step
            slow = next(slow);
            if (
                nums[slow] === 0 ||
                (nums[slow] > 0) !== dir ||
                next(slow) === slow
            ) break;

            // advance fast one step
            fast = next(fast);
            if (
                nums[fast] === 0 ||
                (nums[fast] > 0) !== dir ||
                next(fast) === fast
            ) break;

            // advance fast second step
            fast = next(fast);
            if (
                nums[fast] === 0 ||
                (nums[fast] > 0) !== dir ||
                next(fast) === fast
            ) break;

            if (slow === fast) return true;
        }

        // clean up this path
        let j = i;
        while (nums[j] !== 0 && (nums[j] > 0) === dir) {
            const nxt = next(j);
            nums[j] = 0;
            j = nxt;
        }
    }

    return false;
}

module.exports = circularArrayLoop;
