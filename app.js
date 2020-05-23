'use strict';

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// readline module for terminal input/output
const rl = require('./readline.js');


// npm package that allows customization of terminal text
const chalk = require('chalk');

// helper function to display application commands
const menu = require('./menu.js');

// an object containing functions to run based on user application commands
const commands = require('./commands.js');

console.log(chalk.hex('#1ddb4c')('Welcome to D&D Companion!\n'));

let user;
let password;

let input;




rl.question(chalk.hex('#4298eb')('Do you already have an account? (y/n) : '), (answer) => {
  input = answer.toLowerCase();

  switch (input) {
    case 'y':
      commands.login();
      break;
    case 'n':
      commands.createAccount();
      break;
    default:
      console.log('Invalid answer.');
  }
});

rl.on('line', command => {
  switch (command.trim()) {
    case 'characters':
      console.log('CHARACTERS');
      break;
    case 'create character':
      console.log('Entered character creator. \n');
      commands.createCharacter();
      break;
    case 'testpass':
      commands.testPass();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('command not recognized');
  }
});

rl.on('close', () => {
  console.log(chalk.hex('#4298eb')('Thank you for using D&D Companion!'));
});



// console.log(`Welcome ${user}!`);

// process.exit();