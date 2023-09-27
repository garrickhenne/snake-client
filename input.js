const { clearInterval } = require('timers');
const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require('./constants');

let connection;
let currDirection = null;
let refreshRate = 70;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    clearInterval(currDirection);
    currDirection = setInterval(() => {
      connection.write(MOVE_UP_KEY);
    }, refreshRate);
  }

  if (data === 'a') {
    clearInterval(currDirection);
    currDirection = setInterval(() => {
      connection.write(MOVE_LEFT_KEY);
    }, refreshRate);
  }

  if (data === 's') {
    clearInterval(currDirection);
    currDirection = setInterval(() => {
      connection.write(MOVE_DOWN_KEY);
    }, refreshRate);
  }

  if (data === 'd') {
    clearInterval(currDirection);
    currDirection = setInterval(() => {
      connection.write(MOVE_RIGHT_KEY);
    }, refreshRate);
  }

  if (data === 'g') {
    connection.write('Say: GG');
  }

  if (data === 'h') {
    connection.write('Say: HI!');
  }

  if (data === 'c') {
    clearInterval(currDirection);
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