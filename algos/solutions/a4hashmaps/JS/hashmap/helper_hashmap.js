// hashmap/helper_hashmap.js

function showHashMapDemo(DesignHashMap) {
    const inputHashMap = new DesignHashMap();

    const keys = [5, 2069, 2070, 2073, 4138, 2068];
    const values = [100, 200, 400, 500, 1000, 5000];
    const funcs = ["Get", "Get", "Put", "Get", "Put", "Get", "Get", "Remove", "Get", "Get", "Remove", "Get"];
    const funcKeys = [[5], [2073], [2073, 250], [2073], [121, 110], [121], [2068], [2069], [2069], [2071], [2071], [2071]];

    for (let i = 0; i < keys.length; i++) {
        inputHashMap.put(keys[i], values[i]);
    }

    console.log("========== HashMap Demonstration ==========");
    for (let i = 0; i < funcs.length; i++) {
        const [k, v] = funcKeys[i];
        switch (funcs[i]) {
            case "Put":
                console.log(`${i + 1}. put(${k}, ${v})`);
                inputHashMap.put(k, v);
                break;
            case "Get":
                console.log(`${i + 1}. get(${k})`);
                console.log(`   ➤ Value returned: ${inputHashMap.get(k)}`);
                break;
            case "Remove":
                console.log(`${i + 1}. remove(${k})`);
                inputHashMap.remove(k);
                break;
        }
        console.log("-".repeat(60));
    }
}

module.exports = { showHashMapDemo };
