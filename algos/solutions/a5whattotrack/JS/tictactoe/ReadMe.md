# Design Tic-Tac-Toe

Try to solve the Design Tic-Tac-Toe problem.

## Statement

Suppose that two players are playing a tic-tac-toe game on an n×n board. They're following specific rules to play and win the game:

- A move is guaranteed to be valid if a mark is placed on an empty block.
- No more moves are allowed once a winning condition is reached.
- A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

Implement a TicTacToe class, which will be used by two players to play the game and win fairly.

Keep in mind the following functionalities that need to be implemented:

- **Constructor**: Initializes an object of TicTacToe, allowing the players to play on a board of size n×n.
- **move(row, col, player)**: Indicates that the player with the ID, player, places their mark on the cell (row, col). The move is guaranteed to be a valid move. At each move, this function returns the player ID if the current player wins and returns 0 if no one wins.

## Constraints:

- 2 ≤ n ≤ 9
- player should be either 1 or 2.
- 0 ≤ row, col < n
- Every call to move() will be with a unique row, col combination.
- The move() function will be called at most n² times.

## ✅ Final Implementation

```javascript
class TicTacToe {
  constructor(n) {
    this.n = n;
    // Track row and column scores for each player: index 0 = Player 1, index 1 = Player 2
    this.rows = Array.from({ length: n }, () => [0, 0]);
    this.cols = Array.from({ length: n }, () => [0, 0]);
    this.diagonals = [
      [0, 0],
      [0, 0],
    ]; // [mainDiagonal, antiDiagonal]
  }

  move(row, col, player) {
    const p = player - 1;

    this.rows[row][p]++;
    this.cols[col][p]++;

    if (row === col) {
      this.diagonals[0][p]++;
    }

    if (row + col === this.n - 1) {
      this.diagonals[1][p]++;
    }

    if (
      this.rows[row][p] === this.n ||
      this.cols[col][p] === this.n ||
      this.diagonals[0][p] === this.n ||
      this.diagonals[1][p] === this.n
    ) {
      return player;
    }

    return 0;
  }
}

export default TicTacToe;
```

## 🧠 Explanation:

- We use counters instead of storing the board state.
- For each player, increment counts in:
  - Row
  - Column
  - Main diagonal (if `row == col`)
  - Anti-diagonal (if `row + col == n - 1`)
- If any counter reaches `n`, that player wins.

## 📦 Example:

```javascript
const game = new TicTacToe(3);
console.log(game.move(0, 0, 1)); // 0
console.log(game.move(0, 2, 2)); // 0
console.log(game.move(2, 2, 1)); // 0
console.log(game.move(1, 1, 2)); // 0
console.log(game.move(2, 0, 1)); // 0
console.log(game.move(1, 0, 2)); // 0
console.log(game.move(2, 1, 1)); // 1 (Player 1 wins)
```
