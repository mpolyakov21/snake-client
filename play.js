const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect(); // Establish connection


// Call setupInput function to set up input from stdin
setupInput(conn);