import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('Могу я узнать как вас зовут? ');
  console.log(`Привет ${userName}, давай сыграем в игру.`);
};

const greetingTwoPlayers = () => {
  const userNameFirst = readlineSync.question('Могу я узнать как зовут первого игрока? ');
  const userNameSecond = readlineSync.question('Как зовут второго игрока? ');
  console.log(`Привет ${userNameFirst} и ${userNameSecond}, давайте сыграем в игру.`);
};
export { greeting, greetingTwoPlayers };
