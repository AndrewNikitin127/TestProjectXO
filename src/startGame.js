import ticTacToe from './games/ticTacToe.js';
import greeting from './greeting.js';

export default () => {
  const gameConf = greeting();

  console.log('точка входа , тут запускаются модули после старта');
  ticTacToe(gameConf);
};

/* тут будут основное меню после запуска игры, так же
   если наша игра будет подтягиваться как пакет в другом проекте
   то стартовать будет от сюда. этот файл является точкой входа программы, */
