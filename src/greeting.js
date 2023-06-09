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

const playersData = {
  playerOne: {
    name: '',
    avatar: '',
  },
  playerTwo: {
    name: '',
    avatar: '',
  },
};

const greeting = () => {
  playersData.playerOne = greetingOnePlayer();
  playersData.playerTwo = greetingTwoPlayers();
  return playersData;
};

export { playersData, greetingOnePlayer, greetingTwoPlayers };
export default greeting;
