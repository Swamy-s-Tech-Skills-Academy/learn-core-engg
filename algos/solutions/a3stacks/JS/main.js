// main.js

const { calculator } = require("./calculator/algo");

// Helpers
const { showCalculatorDemo } = require("./calculator/helper_calculator");

function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Calculator Algorithm Demonstration");
    console.log("=".repeat(50));
    showCalculatorDemo(calculator);
}

main();
