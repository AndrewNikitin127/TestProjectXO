import readlineSync from 'readline-sync';

const avatarCat = ['  (\\__/)\n  (=‘.’=)\nE[:]|||||[:]З\n  (“)_(”)',
  "`(“).(”)\n`(’ o ') \n (“) `(”)\n(“”)-(“”)"];

const selectAvatar = () => {
  const indexAvatar = readlineSync.keyInSelect(avatarCat, 'Выбери аватарку:');
  return `\n ${avatarCat[indexAvatar]}`;
};

export default selectAvatar;
