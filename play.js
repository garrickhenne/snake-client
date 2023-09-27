const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('connecting ...');
let conn = connect();

setupInput(conn);