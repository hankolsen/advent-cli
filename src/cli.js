const path = require('path');
const { Command } = require('commander');

const init = require('./init');

const main = (args = process.argv, program = new Command()) => {
  const defaultNameTemplate = 'solve.js';
  const defaultTemplateFile = path.resolve(__dirname, 'templates', 'day.js');

  program
    .version('0.0.1')
    .command('init [day]', { isDefault: true })
    .description('Initalize a given day')
    .action((day) => {
      init(day);
    });

  program.parse(args);
};

module.exports = main;
