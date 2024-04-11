const { connect } = require("./client");

console.log("Connecting ...");
const conn = connect(); // Establish connection

// Function to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Function to handle user input from stdin
  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
  };

  // Attach handleUserInput to stdin using .on method
  stdin.on("data", handleUserInput);

  return stdin;
};

// Call setupInput function to set up input from stdin
setupInput();