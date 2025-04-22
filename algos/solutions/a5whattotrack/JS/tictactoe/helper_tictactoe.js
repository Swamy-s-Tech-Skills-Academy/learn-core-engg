// tictactoe/helper_tictactoe.js

function showTicTacToeDemo(TicTacToe) {
  let n = 3;
  let inputs = [
    [[0, 1, 1], [1, 0, 2], [2, 1, 1], [1, 2, 2], [0, 2, 1], [2, 2, 2], [1, 1, 1]],
    [[0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [1, 0, 1], [2, 0, 2], [1, 2, 1]]
  ];

  for (let game = 0; game < 2; game++) {
    console.log(`Game ${game + 1}:\n`);
    const tic_tac_toe_obj = new TicTacToe(n);
    let win = 0;

    for (let i = 0; i < inputs[game].length; i++) {
      console.log(`Move ${i + 1}: Player ${inputs[game][i][2]} places their mark at ${inputs[game][i][0]}, ${inputs[game][i][1]}`);

      win = tic_tac_toe_obj.move(inputs[game][i][0], inputs[game][i][1], inputs[game][i][2]);

      if (win === 0) {
        console.log("No one wins the game");
        console.log("-".repeat(100));
      } else {
        console.log(`Player ${win} wins the game`);
        console.log("-".repeat(100));
        break;
      }
    }
  }
}

module.exports = { showTicTacToeDemo };