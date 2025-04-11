// hashmap/algo.test.js
const { DesignHashMap } = require('./algo');

test('HashMap basic put/get/remove operations', () => {
    const map = new DesignHashMap();
    map.put(5, 100);
    map.put(2069, 200);
    map.put(2073, 500);

    expect(map.get(5)).toBe(100);
    expect(map.get(2069)).toBe(200);
    expect(map.get(2073)).toBe(500);

    map.remove(2069);
    expect(map.get(2069)).toBe(-1);
});
