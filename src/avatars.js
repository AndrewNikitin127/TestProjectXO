import readlineSync from 'readline-sync';

const selectAvatar = () => {
  const avatarCat = ['  (\\__/)\n  (=‘.’=)\nE[:]|||||[:]З\n  (“)_(”)',
    "`(“).(”)\n`(’ o ') \n (“) `(”)\n(“”)-(“”)"];
  const indexAvatar = readlineSync.keyInSelect(avatarCat, 'Выбери аватарку');
  console.log(avatarCat[indexAvatar]);
};

export default selectAvatar;
