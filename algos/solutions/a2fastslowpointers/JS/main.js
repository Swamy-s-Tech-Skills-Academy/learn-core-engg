// main.js

const { isHappyNumber } = require("./happynumber/algo");
const { circularArrayLoop } = require("./circulararray/algo");
const { findDuplicate } = require("./findduplicate/algo");

// Import helpers
const { showHappyNumberDemo } = require("./happynumber/helper_happynumber");
const { showCircularArrayLoopDemo } = require("./circulararray/helper_circulararrayloop");
const { showFindDuplicateDemo } = require("./findduplicate/helper_findduplicate");

// -------------------- Main Execution --------------------
function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Happy Number Algorithm Demonstration");
    console.log("=".repeat(50));
    showHappyNumberDemo(isHappyNumber);

    console.log("\n" + "=".repeat(50));
    console.log("✅ Circular Array Loop Demonstration");
    console.log("=".repeat(50));
    showCircularArrayLoopDemo(circularArrayLoop);

    console.log("\n" + "=".repeat(50));
    console.log("✅ Find Duplicate - Fast & Slow Pointers Demo");
    console.log("=".repeat(50));
    showFindDuplicateDemo(findDuplicate);
}

main();
