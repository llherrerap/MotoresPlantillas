var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const usuario = {
    nombre: 'Liliana',
    apellido: 'Herrera',
    correo: 'lili@example.com',
    pagina: 'Back End'
  }
  res.render('index', usuario);
});

module.exports = router;
