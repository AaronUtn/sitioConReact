var express = require("express");
var router = express.Router();
var novedadesModel = require("./../../models/novedadesModels"); //me traigo las funciones del archivo novedades

router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades(); //creo la variable que pueden usar las funciones de novedades
  console.log("Sesión en /admin/novedades desde novedades:", req.session);
  if (!req.session.nombre) {
    console.log("Sesión no encontrada, redirigiendo a login");
    return res.redirect("/admin/login");
  }
  //campos de prueba 
  //console.log('Entrando a novedades con sesión:', req.session);
  //console.log("tipo de datos de novedades", typeof novedades); //verifico que no tenga problemas al levantar los datos de la tabla
  //console.log("contenido", novedades); //para ver que propiedades tiene el objeto
  res.render("admin/novedades", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    novedades, //muestro las novedades
  });
});

/*para mostrar el formulario o el diseño de agregar las novedades */
router.get("/agregar", (req, res, netx) => {
  //console.log("agregar cargando!");
  res.render("admin/agregar", { //agregar.hbs
    layout: "admin/layout",
  });
});

router.post('/agregar',async(req,res)=>{

  try{
    /*
    console.log("dentro del metodo post");
    console.log("antes de convertir e tipo del body por que es un objetc:null prototype");
    console.log(req.body); //deberia ver lo que se envie*/
    //console.log("se convirtio el body a un objeto plano para que sea compatible ",datos);
    
    var datos = Object.assign({},req.body);
    if(datos.titulo != ""&& datos.subtitulo != "" && datos.cuerpo != ""){
      await novedadesModel.insertNovedad(datos);
      res.redirect('/admin/novedades')
    }else{
      res.render('admin/agregar',{
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  }catch(error){
    console.log("hay un error en la captura de nuevo",error)
    res.render('admin/agregar',{
      layout: 'admin/layout',
      error: true, message: 'No se cargo la novedad'
    });
  }
});

module.exports = router;
