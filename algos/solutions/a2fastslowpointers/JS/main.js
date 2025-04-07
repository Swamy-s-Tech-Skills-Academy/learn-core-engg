// main.js

const { isHappyNumber } = require("./happynumber/algo");

// Import helpers
const { showHappyNumberDemo } = require("./happynumber/helper_happynumber");

// -------------------- Main Execution --------------------
function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Happy Number Algorithm Demonstration");
    console.log("=".repeat(50));
    showHappyNumberDemo(isHappyNumber);
}

main();
