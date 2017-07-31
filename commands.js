
var chalk = require('chalk');
var commands = {
  pwd: function () {
    process.stdout.write(chalk.green(process.argv[1]));
    process.stdout.write(chalk.yellow('\nprompt > '));
  },

  date: function () {
    var date = new Date();
    process.stdout.write(chalk.green(date.toString()));
    process.stdout.write(chalk.yellow('\nprompt > '));
  },

  ls: function () {
    var fs = require('fs');
    var files = fs.readdirSync('.');
    for (var i=0;i<files.length;i++) {
      process.stdout.write(chalk.green(`${files[i]}\n`));
    }
    process.stdout.write(chalk.yellow('prompt > '));
  },

  echo: function(args) {
    if(args[0] === "$") {
      process.stdout.write(chalk.green(process.env[args.slice(1)]));
    } else {
      process.stdout.write(chalk.green(args));
    }
    process.stdout.write(chalk.yellow('\nprompt > '));
  }
}

module.exports.commands = commands;
