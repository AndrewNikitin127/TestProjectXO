import readlineSync from 'readline-sync';

console.log('Добро пожаловать в игру крестики нолики. Выбери режим игры.');

const greetingTwoPlayers = () => {
  const userNameFirst = readlineSync.question('Могу я узнать как зовут первого игрока?');
  const userNameSecond = readlineSync.question('Как зовут второго игрока?');
  console.log(`Привет ${userNameFirst} и ${userNameSecond}, давайте сыграем в игру.`);
};
export default greetingTwoPlayers;
