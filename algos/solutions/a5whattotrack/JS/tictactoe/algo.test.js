// tictactoe/algo.test.js

const { TicTacToe } = require('./algo');

describe('Tic-Tac-Toe', () => {
  test('Game 1 from demo', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 1, 1)).toBe(0); // No winner yet
    expect(game.move(1, 0, 2)).toBe(0); // No winner yet
    expect(game.move(2, 1, 1)).toBe(0); // No winner yet
    expect(game.move(1, 2, 2)).toBe(0); // No winner yet
    expect(game.move(0, 2, 1)).toBe(0); // No winner yet
    expect(game.move(2, 2, 2)).toBe(0); // No winner yet
    expect(game.move(1, 1, 1)).toBe(1); // Player 1 wins
  });

  test('Game 2 from demo', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 0, 1)).toBe(0); // No winner yet
    expect(game.move(0, 2, 2)).toBe(0); // No winner yet
    expect(game.move(2, 2, 1)).toBe(0); // No winner yet
    expect(game.move(1, 1, 2)).toBe(0); // No winner yet
    expect(game.move(1, 0, 1)).toBe(0); // No winner yet
    expect(game.move(2, 0, 2)).toBe(2); // Player 2 wins
  });

  test('Game with no winner after several moves', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 0, 1)).toBe(0); // No winner yet
    expect(game.move(1, 1, 2)).toBe(0); // No winner yet
    expect(game.move(0, 1, 1)).toBe(0); // No winner yet
    expect(game.move(0, 2, 2)).toBe(0); // No winner yet
    expect(game.move(2, 0, 1)).toBe(0); // No winner yet
    expect(game.move(1, 0, 2)).toBe(0); // No winner yet
  });

  test('Winning by diagonal', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 0, 1)).toBe(0); // No winner yet
    expect(game.move(0, 1, 2)).toBe(0); // No winner yet
    expect(game.move(1, 1, 1)).toBe(0); // No winner yet
    expect(game.move(0, 2, 2)).toBe(0); // No winner yet
    expect(game.move(2, 2, 1)).toBe(1); // Player 1 wins by diagonal
  });

  test('Winning by anti-diagonal', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 2, 1)).toBe(0); // No winner yet
    expect(game.move(0, 0, 2)).toBe(0); // No winner yet
    expect(game.move(1, 1, 1)).toBe(0); // No winner yet
    expect(game.move(0, 1, 2)).toBe(0); // No winner yet
    expect(game.move(2, 0, 1)).toBe(1); // Player 1 wins by anti-diagonal
  });

  test('Larger board (4x4)', () => {
    const game = new TicTacToe(4);
    expect(game.move(0, 0, 1)).toBe(0);
    expect(game.move(0, 1, 2)).toBe(0);
    expect(game.move(1, 0, 1)).toBe(0);
    expect(game.move(1, 1, 2)).toBe(0);
    expect(game.move(2, 0, 1)).toBe(0);
    expect(game.move(2, 1, 2)).toBe(0);
    expect(game.move(3, 0, 1)).toBe(1); // Player 1 wins by column
  });
});