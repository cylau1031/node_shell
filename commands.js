
var commands = {
  pwd: function () {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt > ');
  },

  date: function () {
    var date = new Date();
    process.stdout.write(date.toString());
    process.stdout.write('\nprompt > ');
  },

  ls: function () {
    var fs = require('fs');
    var files = fs.readdirSync('.');
    for (var i=0;i<files.length;i++) {
      process.stdout.write(`${files[i]}\n`);
    }
    process.stdout.write('prompt > ');
  }
}

module.exports.commands = commands;
