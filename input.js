let connection;

// Function to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Function to handle user input from stdin
  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    } else if (key === 'w') {
      connection.write("Move: up"); // Send the movement command to the server
    } else if (key === 'a') {
      connection.write("Move: left"); // Send the movement command to the server
    } else if (key === 's') {
      connection.write("Move: down"); // Send the movement command to the server
    } else if (key === 'd') {
      connection.write("Move: right"); // Send the movement command to the server
    }
  };

  // Attach handleUserInput to stdin using .on method
  stdin.on("data", handleUserInput);

  return stdin;
};

// Export the setupInput function using ES6 object shorthand notation
module.exports = { setupInput };