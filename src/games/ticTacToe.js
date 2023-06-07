import readlineSync from 'readline-sync';

export default () => {
  const emptyCell = '   ';
  const board = [
    [emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell],
  ];

  const charPlayer1 = ' X ';
  const charComputer = ' 0 ';

  let winner = emptyCell;

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const question = (questWord) => {
    const result = readlineSync.question(`Введите номер ${questWord} #(1-3): `, {
      limit: /^[1-3]$/g,
      limitMessage: 'Извините, $<lastInput> не подходит.',
    });
    return result - 1;
  };

  const printBoard = () => {
    console.log();
    console.log(` ${board[0][0]} | ${board[0][1]} | ${board[0][2]} `);
    console.log('-----|-----|-----');
    console.log(` ${board[1][0]} | ${board[1][1]} | ${board[1][2]} `);
    console.log('-----|-----|-----');
    console.log(` ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `);
    console.log();
  };

  const checkFreeSpace = () => {
    let freeSpaces = 9;

    board.forEach((lineArr) => lineArr.forEach((cell) => {
      if (cell !== emptyCell) freeSpaces -= 1;
    }));
    return freeSpaces > 0;
  };

  const playerMove = () => {
    let x;
    let y;

    do {
      console.log('ваш ход\n');

      x = question('строки');
      y = question('ячейки');

      if (board[x][y] !== emptyCell) {
        console.log('Ячейка уже занята');
      } else {
        board[x][y] = charPlayer1;
        break;
      }
    } while (board[x][y] !== emptyCell);
  };

  const printWinner = () => {
    if (winner === charPlayer1) {
      console.log(' вы победили');
    } else if (winner === charComputer) {
      console.log('вы проиграли');
    } else {
      console.log('ничья');
    }
  };
  const computerMove = () => {
    let x;
    let y;

    if (checkFreeSpace()) {
      do {
        x = getRandomInt(0, 2);
        y = getRandomInt(0, 2);
      } while (board[x][y] !== emptyCell);

      board[x][y] = charComputer;
    } else {
      printWinner(emptyCell);
    }
  };
  const checkWinner = () => {
    // check for rows
    for (let i = 0; i < 3; i += 1) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0];
      }
    }
    // check for column
    for (let i = 0; i < 3; i += 1) {
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return board[0][i];
      }
    }
    // check for diagonals
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2];
    }
    return emptyCell;
  };

  while (winner === emptyCell && checkFreeSpace()) {
    printBoard();
    playerMove();
    winner = checkWinner();

    if (winner !== emptyCell || !checkFreeSpace()) {
      break;
    }
    computerMove();
    winner = checkWinner();

    if (winner !== emptyCell || !checkFreeSpace()) {
      break;
    }
  }
  printBoard();
  printWinner(winner);
};
