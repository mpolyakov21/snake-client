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

// Export the setupInput function using ES6 object shorthand notation
module.exports = { setupInput };