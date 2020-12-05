const inquirer = require('inquirer');

const confirmContinue = (message) =>
  inquirer
    .prompt([
      {
        type: 'confirm',
        message,
        name: 'continue',
      },
    ])
    .then((answers) => answers.continue);

module.exports = confirmContinue;
