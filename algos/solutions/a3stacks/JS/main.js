// main.js

const { calculator } = require("./calculator/algo");
const removeDuplicates = require('./removeadjduplicates/algo');

// Helpers
const { showCalculatorDemo } = require("./calculator/helper_calculator");
const { showRemoveAdjacentDuplicatesDemo } = require('./removeadjduplicates/helper_removeadjduplicate');
const { showMinRemoveParenthesesDemo } = require('./minremoveparentheses/helper_minremoveparentheses');

function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ Calculator Algorithm Demonstration");
    console.log("=".repeat(50));
    showCalculatorDemo(calculator);
    console.log("\n" + "-".repeat(50));

    console.log("\n" + "=".repeat(50));
    console.log("✅ Remove Adjacent Duplicates Algorithm Demonstration");
    console.log("=".repeat(50));
    showRemoveAdjacentDuplicatesDemo(removeDuplicates);
    console.log("\n" + "-".repeat(50));

    console.log("\n" + "=".repeat(50));
    console.log("✅ Minimum Remove to Make Valid Parentheses Algorithm Demonstration");
    console.log("=".repeat(50));
    showMinRemoveParenthesesDemo();
    console.log("\n" + "-".repeat(50));
}

main();


