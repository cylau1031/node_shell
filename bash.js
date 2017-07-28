//console.log(process);

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();

  if (cmd === 'pwd') {
    process.stdout.write(process.argv[1]);
  }
  if (cmd === 'date') {
    var date = new Date();
    //var day = `${date.getDay()} ${date.getMonth()} ${date.getDate()} ${date.getTime()}`
    process.stdout.write(date.toString());
  }
  process.stdout.write('\nprompt > ');

});
