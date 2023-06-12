var express = require('express');
var router = express.Router();

// Inicio conexion a la base de datos

// Configuración de la base de datos
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'usuarios'
});

// Conexión a la base de datos
connection.connect(function(err) {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Fin conexion a la base de datos

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM personas', function(error, results, fields) {
    if (error) throw error;
    res.render('usuarios', { title: 'Usuarios', usuarios: results });
  });
});

module.exports = router;
