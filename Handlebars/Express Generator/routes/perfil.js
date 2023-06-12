var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    const info = {
        nombre: 'Liliana Herrera',
        curso: 'Back End Básico'
    }
    res.render('perfil', info);
});

module.exports = router;