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
    conn.write("Name: MKP");
    //Sending "move up"
    conn.write("Move: up");
    //conn.write("Move: up");
    /*conn.write("Move: up");
    conn.write("Move: up");    setTimeout(() => {
      conn.write("Move: up");
    }, 50);
    setTimeout(() => {
      conn.write("Move: up");
    }, 100);*/
  });
  
  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// Export the connect function
module.exports = { connect, setupInput };
