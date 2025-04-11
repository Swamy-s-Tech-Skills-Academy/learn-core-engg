# Learnings

- The `algos` directory contains various algorithms implemented in Python.

## Exports

Great question, Swamy! 🙌 This is a very common point of confusion in Node.js/CommonJS. Let's break it down with a real-world analogy and simple examples:

---

### ✅ 1. `module.exports = circularArrayLoop`

You're **exporting the function directly**.

#### Example:

```js
// algo.js
function circularArrayLoop(nums) {
  // your logic
}
module.exports = circularArrayLoop;
```

```js
// main.js
const circularArrayLoop = require("./algo");

circularArrayLoop([2, -1, 1, 2, 2]);
```

> This means that `require('./algo')` **is** the function itself.

---

### ✅ 2. `module.exports = { circularArrayLoop }`

You're exporting an **object** that has a key named `circularArrayLoop`.

#### Equivalent to:

```js
module.exports = {
  circularArrayLoop: circularArrayLoop,
};
```

#### Then you import like:

```js
const { circularArrayLoop } = require("./algo");

circularArrayLoop([2, -1, 1, 2, 2]);
```

> Here, `require('./algo')` returns an **object** `{ circularArrayLoop: function }`, and you're using **destructuring** to extract it.

---

### 🔍 Summary Table

| Export Style                             | Import Style                        | `require('./algo')` returns        |
| ---------------------------------------- | ----------------------------------- | ---------------------------------- |
| `module.exports = circularArrayLoop`     | `const circularArrayLoop = ...`     | The function itself                |
| `module.exports = { circularArrayLoop }` | `const { circularArrayLoop } = ...` | An object: `{ circularArrayLoop }` |

---

### ✅ Which to use?

- If your file exports **a single thing** (like a utility or algorithm), then:

  ```js
  module.exports = circularArrayLoop;
  ```

- If your file might export **multiple things**, like:
  ```js
  module.exports = { circularArrayLoop, anotherFn };
  ```

Let me know if you want to convert multiple functions into a utility-style export!
