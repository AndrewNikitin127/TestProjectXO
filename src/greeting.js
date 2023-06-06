import readlineSync from 'readline-sync';

const startingGames = () => {
  console.log('Добро пожаловать в игру крестики нолики. Выбери режим игры A или B.');
  console.log('A - Одиночная игры. \nB - Игра на двоих.');

  const greeting = () => {
    const userName = readlineSync.question('Могу я узнать как вас зовут? ');
    console.log(`Привет ${userName}, давай сыграем в игру.`);
  };

  const greetingTwoPlayers = () => {
    const userNameFirst = readlineSync.question('Могу я узнать как зовут первого игрока? ');
    const userNameSecond = readlineSync.question('Как зовут второго игрока? ');
    console.log(`Привет ${userNameFirst} и ${userNameSecond}, давайте сыграем в игру.`);
  };

  let gameMode;
  while (gameMode !== 'A' && gameMode !== 'B') {
    gameMode = readlineSync.question('Введите букву (A или B) ');
    if (gameMode === 'A') {
      greeting();
      break;
    } else if (gameMode === 'B') {
      greetingTwoPlayers();
      break;
    } else {
      console.log('Ошибка: Выберите режим игры (Введите A или B)');
    }
  }
};

export default startingGames;
