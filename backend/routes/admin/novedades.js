var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("Sesión en /admin/novedades desde novedades:", req.session);
  if (!req.session.nombre) {
    console.log('Sesión no encontrada, redirigiendo a login');
    return res.redirect('/admin/login');
  }

  //console.log('Entrando a novedades con sesión:', req.session);

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
});

module.exports = router;
