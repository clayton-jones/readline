'use strict';

const cliSelect = require('cli-select');
const chalk = require('chalk');

async function cli() {

  let response = await cliSelect({
    values: ['Major', 'Minor', 'Patch'],
    valueRenderer: (value, selected) => {
        if (selected) {
            return chalk.underline(value);
        }
  
        return value;
    },
  });

  console.log(response);
  
  let response2 = await cliSelect({
    values: ['Major', 'Minor', 'Patch'],
    valueRenderer: (value, selected) => {
        if (selected) {
            return chalk.underline(value);
        }
  
        return value;
    },
  });

  console.log(response2);
}

// cli();

async function start() {
  let response = await cliSelect({
    values: ['Log in', 'Sign up'],
    valueRenderer: (value, selected) => {
        if (selected) {
            return chalk.underline(value);
        }
  
        return value;
    },
  });

  console.log(response);
}

start();