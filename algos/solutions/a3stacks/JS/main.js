// main.js

const { calculator } = require("./calculator/algo");

// Helpers
const { showCalculatorDemo } = require("./calculator/helper_calculator");
const { showHashMapDemo } = require("./hashmap/helper_hashmap");

function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Calculator Algorithm Demonstration");
    console.log("=".repeat(50));
    showCalculatorDemo(calculator);

    console.log("\n" + "=".repeat(50));
    console.log("✅ HashMap Algorithm Demonstration");
    console.log("=".repeat(50));
    showHashMapDemo();
}

main();
