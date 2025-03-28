# Two Pointers

## Valid Palindrome

```powershell
npm init -y
npm install --save-dev jest ts-jest @types/jest ts-node typescript @types/node

npx ts-jest config:init


npm start
npm run test
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true
  }
}
```

### `jest.config.js`

```json
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```
