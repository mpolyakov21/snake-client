const { connect, setupInput } = require("./client");


const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};

// setup interface to handle user input from stdin

console.log("Connecting ...");
const conn = connect(); // Establish connection

const stdin = setupInput();

stdin.on("data", handleUserInput);



// Setup input from stdin
setupInput();