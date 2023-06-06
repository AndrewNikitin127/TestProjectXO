#!/usr/bin/env node
// тут у нас файл старта игры. так же библиотека выводящая help и версию по флагам -h и v

import { Command } from 'commander';
import startGame from '../src/startGame.js';

const program = new Command();

program
  .name('playgame')
  .description('cross tic-tac-toe game')
  .version('1.0.0', '-v, --vers', 'output the current version')
  .action(() => {
    try {
      startGame();
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  });

program.parse();
