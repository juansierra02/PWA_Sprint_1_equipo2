const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {titulo: 'Home'});
} );

router.get('/productos', (req, res) => {
    res.render('productos', {titulo: 'productos'});
} );
router.get('/contacto', (req, res) => {
    res.render('contacto', {titulo: 'Contacto'});
} );

module.exports = router;


