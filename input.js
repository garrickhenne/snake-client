const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require('./constants');

let connection;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    connection.write(MOVE_UP_KEY);
    console.log(MOVE_UP_KEY);
  }

  if (data === 'a') {
    connection.write(MOVE_LEFT_KEY);
    console.log(MOVE_LEFT_KEY);
  }

  if (data === 's') {
    connection.write(MOVE_DOWN_KEY);
    console.log(MOVE_DOWN_KEY);
  }

  if (data === 'd') {
    connection.write(MOVE_RIGHT_KEY);
    console.log(MOVE_RIGHT_KEY);
  }

  if (data === 'g') {
    connection.write('Say: GG');
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };