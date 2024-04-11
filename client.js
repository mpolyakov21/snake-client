const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Event for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Sending name to the server
    conn.write("Name: SNK");
  });

  return conn;
};

// Export the connect function
module.exports = { connect };