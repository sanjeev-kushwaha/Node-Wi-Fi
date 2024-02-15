const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "",
  user: "root",
  password: "",
  database: "node_wifi",
});

connection.connect((Error) => {
  if (Error) {
    console.log("Failed to create connection", Error);
    throw Error;
  }
  console.log("connection created successfully");
});
module.exports = connection;
