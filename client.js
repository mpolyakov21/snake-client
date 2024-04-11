const net = require("net");
const { IP, PORT } = require("./constants");

// Function to establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Sending name to the server
    conn.write("Name: MKP");
  });
  
  return conn;
};

// Export the connect function
module.exports = { connect };