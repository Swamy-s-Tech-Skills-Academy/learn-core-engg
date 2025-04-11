// hashmap/algo.js

class Bucket {
    constructor() {
        this.bucket = [];
    }

    get(key) {
        for (const [k, v] of this.bucket) {
            if (k === key) return v;
        }
        return -1;
    }

    update(key, value) {
        for (let i = 0; i < this.bucket.length; i++) {
            const [k] = this.bucket[i];
            if (key === k) {
                this.bucket[i] = [key, value];
                return;
            }
        }
        this.bucket.push([key, value]);
    }

    remove(key) {
        this.bucket = this.bucket.filter(([k]) => k !== key);
    }
}

class DesignHashMap {
    constructor() {
        this.keySpace = 2069;
        this.bucket = Array.from({ length: this.keySpace }, () => new Bucket());
    }

    put(key, value) {
        const hashKey = key % this.keySpace;
        this.bucket[hashKey].update(key, value);
    }

    get(key) {
        const hashKey = key % this.keySpace;
        return this.bucket[hashKey].get(key);
    }

    remove(key) {
        const hashKey = key % this.keySpace;
        this.bucket[hashKey].remove(key);
    }
}

module.exports = { DesignHashMap };
