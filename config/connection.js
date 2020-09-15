var mysql = require("mysql");
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Myyear2020",
  database: "burgers_db",
});
connection.connect(function (err) {
  if (err) {
    console.log("error connection:" + err.stack);
    return;
  }
  console.log("conected as id" + connection.threadId);
});
module.exports = connection;
