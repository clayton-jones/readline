'use strict';

const rl = require('./readline.js');

const chalk = require('chalk');

const menu = require('./menu.js');

function createCharacter() {
  console.log(chalk.green('Please fill out the following information about your character:'));
  let charName;
  let charRace;
  let charClass;

  rl.question(chalk.blue('\nWhat is your characters name? '), name => {
    charName = name;

    rl.question(chalk.blue('\nWhat is your characters race? '), race => {
      charRace = race;

      rl.question(chalk.blue('\nWhat is your characters class? '), characterClass => {
        charClass = characterClass;

        console.log(chalk.green(`\nYou have created a ${charRace} ${charClass} named ${charName}!`));
      });
    });
  });
}

function login() {
  let user;
  let password;
  console.log(chalk.hex('#4298eb')('\nPlease log in.\n'));
  rl.question('Username: ', username => {
    user = username;

    rl.loginPassMuted = true;

    rl.question('Password: ', pass => {
      password = pass;
    
      console.log(chalk.hex('#4298eb')(`\nWelcome, ${user}`));
      rl.loginPassMuted = false;
      menu();
    });

    // function that hides sensitive information being typed into the terminal
    rl._writeToOutput = function _writeToOutput(stringToWrite) {
      if (rl.loginPassMuted)
        rl.output.write("*");
      else
        rl.output.write(stringToWrite);
    };
  });
}

function testPass() {
  rl.stdoutMuted = true;

  rl.question('Password: ', function(password) {
    console.log('\nPassword is ' + password);
  });
}

function createAccount() {
  let user;
  let password;
  console.log(chalk.hex('#4298eb')('\nPlease create a profile.\n'));

  rl.question('Username: ', username => {
    user = username;

    rl.acctCreatePassMuted = true;

    rl.question('Password: ', pass => {
      password = pass;
      console.log(chalk.hex('#4298eb')(`\nWelcome, ${user}`));

      rl.acctCreatePassMuted = false;
    });

    rl._writeToOutput = function _writeToOutput(stringToWrite) {
      if (rl.acctCreatePassMuted)
        rl.output.write("*");
      else
        rl.output.write(stringToWrite);
    };
  });
}

module.exports = { createCharacter, login, testPass, createAccount };