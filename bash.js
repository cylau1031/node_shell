//console.log(process);
var commands = require('./commands.js').commands;
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' ')[0];
  var args = data.toString().trim().split(' ').slice(1).join(' ');

  commands[cmd](args);
});
