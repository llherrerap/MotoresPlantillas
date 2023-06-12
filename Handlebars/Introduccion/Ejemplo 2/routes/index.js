var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { mensaje: 'Ingrese su usuario y contraseña', error: false});
});

router.post('/login', function(req, res, next) {
  const username = req.body.user;
  const password = req.body.pass;

  const usuarios = [
    { nombre: 'Usuario 1', edad: 51},
    { nombre: 'Usuario 2', edad: 30},
    { nombre: 'Usuario 3', edad: 28}
  ];
    if (username === "desarrollador" && password === "backend1234") {
      // Credenciales correctas, mostrar la lista de usuarios
      res.render('usuarios', { usuarios });
    } else {
      // Credenciales incorrectas, mostrar mensaje de error
      res.render('index', { mensaje: 'Credenciales incorrectas', error: true});
    }
});

module.exports = router;
