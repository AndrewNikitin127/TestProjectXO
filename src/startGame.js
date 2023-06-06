import ticTacToe from './games/ticTacToe.js';
import startingGames from './greeting.js';

export default () => {
  startingGames();
  console.log('точка входа , тут запускаются модули после старта');
  ticTacToe();
};

/* тут будут основное меню после запуска игры, так же
   если наша игра будет подтягиваться как пакет в другом проекте
   то стартовать будет от сюда. этот файл является точкой входа программы, */
