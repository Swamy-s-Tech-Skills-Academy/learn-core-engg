// main.js

const { DesignHashMap } = require("./hashmap/algo");

// Helpers
const { showHashMapDemo } = require("./hashmap/helper_hashmap");

function main() {
    console.log("\n" + "=".repeat(50));
    console.log("✅ HashMap Algorithm Demonstration");
    console.log("=".repeat(50));
    showHashMapDemo(DesignHashMap);
}

main();
