// main.js
const { DesignHashMap } = require("./hashmap/algo");
const { fractionToDecimal } = require('./fractionrecurring/algo');

// Helpers
const { showHashMapDemo } = require("./hashmap/helper_hashmap");
const { showFractionDemo } = require('./fractionrecurring/helper_fraction');

function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ HashMap Algorithm Demonstration");
    console.log("=".repeat(50));
    showHashMapDemo(DesignHashMap);
    console.log("-".repeat(50));

    console.log("\n" + "=".repeat(50));
    console.log("✅ Fraction to Recurring Decimal Demonstration");
    console.log("=".repeat(50));
    showFractionDemo(fractionToDecimal);
    console.log("-".repeat(50));
}

main();


