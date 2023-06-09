import readlineSync from 'readline-sync';
import ticTacToe from './games/ticTacToe.js';
import { playersData, greetingOnePlayer, greetingTwoPlayers } from './greeting.js';

export default () => {
  console.log('Добро пожаловать в игру крестики нолики. Выбери режим игры A или B.');
  console.log('A - Одиночная игры. \nB - Игра на двоих.');

  let gameMode;
  while (gameMode !== 'A' && gameMode !== 'B') {
    gameMode = readlineSync.question('Введите букву (A или B) ');
    if (gameMode === 'A' || gameMode === 'a') {
      playersData.playerOne = greetingOnePlayer();
      break;
    } else if (gameMode === 'B' || gameMode === 'b') {
      playersData.playerOne = greetingOnePlayer();
      playersData.playerTwo = greetingTwoPlayers();
      break;
    } else {
      console.log('Ошибка: Выберите режим игры (Введите A или B)');
    }
  }
  console.log('точка входа , тут запускаются модули после старта');
  console.log(`Аватар ${playersData.playerOne.name}: ${playersData.playerOne.avatar}\n Аватар ${playersData.playerTwo.name}: ${playersData.playerTwo.avatar}`);
  ticTacToe();
};

/* тут будут основное меню после запуска игры, так же
   если наша игра будет подтягиваться как пакет в другом проекте
   то стартовать будет от сюда. этот файл является точкой входа программы, */
