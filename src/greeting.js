import readlineSync from 'readline-sync';
import selectAvatar from './avatars.js';

const greetingOnePlayer = () => {
  const playerOne = {};
  playerOne.name = readlineSync.question('Могу я узнать как вас зовут? ');
  console.log(`Привет ${playerOne.name}, давай выберем тебе аватар:`);
  playerOne.avatar = selectAvatar();
  return playerOne;
};

const greetingTwoPlayers = () => {
  const playerTwo = {};
  playerTwo.name = readlineSync.question('Как зовут второго игрока? ');
  console.log(`${playerTwo.name}, давай выберем тебе аватар:`);
  playerTwo.avatar = selectAvatar();
  return playerTwo;
};

export default () => {
  console.log('Добро пожаловать в игру крестики нолики. Выбери режим игры A или B.');
  console.log('A - Одиночная игры. \nB - Игра на двоих.');

  const gameConf = { playerOne: null, playerTwo: null, mode: null };

  while (gameConf.mode !== 'A' && gameConf.mode !== 'B') {
    gameConf.mode = readlineSync.question('Введите букву (A или B) ').toLocaleUpperCase();
    if (gameConf.mode === 'A') {
      gameConf.playerOne = greetingOnePlayer();
      break;
    } else if (gameConf.mode === 'B') {
      gameConf.playerOne = greetingOnePlayer();
      gameConf.playerTwo = greetingTwoPlayers();
      break;
    } else {
      console.log('Ошибка: Выберите режим игры (Введите A или B)');
    }
  }
  console.log(gameConf);
  return gameConf;
};
