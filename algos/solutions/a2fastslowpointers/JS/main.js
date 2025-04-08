// main.js

const { isHappyNumber } = require("./happynumber/algo");
const { circularArrayLoop } = require("./circulararrayloop/algo");

// Import helpers
const { showHappyNumberDemo } = require("./happynumber/helper_happynumber");
const { showCircularArrayLoopDemo } = require("./circulararrayloop/helper_circulararrayloop");

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
}

main();
