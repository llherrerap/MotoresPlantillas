var mysql = require("mysql");

// Conexion de la base de datos
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "usuarios",
});

connection.connect();

module.exports = connection;