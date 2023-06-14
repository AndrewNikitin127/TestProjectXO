import chalk from 'chalk';
import { getRandomInt, askQuestionRange, pause } from '../tools.js';
import { checkWinner, gameCanContinue, printBoard } from './ticTacToe_tools.js';

const printWinner = (winner, charPlayer1, charComputer) => {
  if (winner === charPlayer1) {
    console.log(chalk.hex('#A1FFA3')('вы победили'));
  } else if (winner === charComputer) {
    console.log(chalk.hex('#FF4F5A')('вы проиграли'));
  } else {
    console.log(chalk.hex('#71B0E8')('ничья'));
  }
};

const getPlayerMove = (board, emptyCell) => {
  let x;
  let y;
  do {
    console.log(chalk.hex('#EFC09D')('ваш ход\n'));
    x = askQuestionRange(chalk.hex('#B6E1FA')('ведите номер строки #(1-3): '), 1, 3) - 1;
    y = askQuestionRange(chalk.hex('#B6E1FA')('ведите номер ячейки #(1-3): '), 1, 3) - 1;

    if (board[x][y] !== emptyCell) console.log(chalk.hex('#DA104C')('Ячейка уже занята'));
  } while (board[x][y] !== emptyCell);
  return [x, y];
};

const getComputerMove = (board, emptyCell) => {
  let x;
  let y;

  do {
    x = getRandomInt(0, 2);
    y = getRandomInt(0, 2);
  } while (board[x][y] !== emptyCell);
  return [x, y];
};

export default () => {
  const emptyCell = '   ';
  const board = [
    [emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell],
  ];
  const charPlayer1 = chalk.hex('#CDB861').bold(' X ');
  const charComputer = chalk.hex('#C38CD0').bold(' 0 ');
  let winner = emptyCell;

  while (gameCanContinue(winner, board, emptyCell)) {
    console.clear();
    printBoard(board);
    const [x, y] = getPlayerMove(board, emptyCell);
    board[x][y] = charPlayer1;
    winner = checkWinner(board, emptyCell);
    if (!gameCanContinue(winner, board, emptyCell)) break;

    console.clear();
    printBoard(board);
    console.log('🤖 Компьютер думает...');
    pause(1200);
    const [a, z] = getComputerMove(board, emptyCell);
    board[a][z] = charComputer;
    winner = checkWinner(board, emptyCell);
    if (!gameCanContinue(winner, board, emptyCell)) break;
  }
  console.clear();
  printBoard(board);
  printWinner(winner, charPlayer1, charComputer);
};
