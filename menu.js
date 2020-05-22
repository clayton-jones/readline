'use strict';

const chalk = require('chalk');

function menu() {
  console.log(chalk.hex('#4298eb')('\nPlease use the following prompts to navigate the application:\n'))
  console.log('characters - get a list of all of your characters');
  console.log('create character - create a new player character\n');
}

module.exports = menu;