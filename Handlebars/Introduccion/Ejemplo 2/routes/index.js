var express = require('express');
var router = express.Router();
var conexion = require('../conection')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/usuarios', (req, res) => {
  conexion.query('SELECT * FROM personas', function(error, results) {
    if (error) throw error;
    res.send(results)
  });
})

module.exports = router;
