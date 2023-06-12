var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { mensaje: 'Ingrese su usuario y contraseña', error: false});
});

router.post('/login', function(req, res, next) {
  const username = req.body.user;
  const password = req.body.pass;

    if (username === "desarrollador" && password === "backend1234") {
      // Credenciales correctas, mostrar la lista de usuarios
      res.render('index', { usuario: `${username}` });
    } else {
      // Credenciales incorrectas, mostrar mensaje de error
      res.render('login', { mensaje: 'Credenciales incorrectas', error: true});
    }
});

module.exports = router;