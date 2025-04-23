// tictactoe/algo.js

class TicTacToe {
    constructor(n) {
        // TicTacToe class contains rows, cols, diagonal,
        // and antiDiagonal to create a board.
        // Constructor is used to create n * n tic - tac - toe board.
        this.rows = Array(n).fill(0);
        this.cols = Array(n).fill(0);
        this.diagonal = 0;
        this.antiDiagonal = 0;
    }

    // Move function will allow the players to play the game
    // for given row and col.
    move(row, col, player) {
        let currentPlayer = -1;
        if (player == 1){
            currentPlayer = 1;
        }

        let n = this.rows.length;

        this.rows[row] += currentPlayer;
        this.cols[col] += currentPlayer;
  
        if (row == col){
            this.diagonal += currentPlayer;
        }
        if (col == (n - row - 1)){
            this.antiDiagonal += currentPlayer;
        }

       
        if (Math.abs(this.rows[row]) == n || Math.abs(this.cols[col]) == n || Math.abs(this.diagonal) == n || Math.abs(this.antiDiagonal) == n){
            return player;
        }
        return 0;
    }
}

module.exports = { TicTacToe };