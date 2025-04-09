// main.js

const { runCalculatorExamples } = require("./calculator/helper_calculator");

// -------------------- Main Execution --------------------
function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Calculator Demonstration");
    console.log("=".repeat(50));
    runCalculatorExamples();
    console.log("✅ Demonstration Complete");

}

main();
