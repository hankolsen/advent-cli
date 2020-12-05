const { Command } = require('commander');

const init = require('./init');

const main = (args = process.argv, program = new Command()) => {
  program
    .version('0.0.2')
    .description(
      'Initalize a new AoC folder with a setup of files from a folder with template files',
    )
    .option('-d, --day <day>', "The day to use. Leave blank for today's date")
    .option(
      '-t, --templates <templateFolder>',
      'Path to the location of your templates. Leave blank for default template files',
    )
    .action((cmd) => {
      const { day, templates } = cmd.opts();
      init({ day, templates });
    });

  program.parse(args);
};

module.exports = main;
