//m6u3consumo de api //TODO ESTA PAGINA//
var express = require("express");
var router = express.Router();
var novedadesModel = require("./../models/novedadesModels");
var cloudinary = require("cloudinary").v2;

router.get("/novedades", async function (req, res, next) {
  try {
    let novedades = await novedadesModel.getNovedades();
    novedades = novedades.map((novedad) => {
      if (novedad.img_id) {
        const imagen = cloudinary.url(novedad.img_id, {
          width: 960,
          height: 200,
          crop: "fill",
        });
        return {
          ...novedad,
          imagen,
        };
      } else {
        return {
          ...novedad,
          imagen: "",
        };
      }
    });

    res.json(novedades);
  } catch (error) {
    console.error("Error obteniendo novedades", error);
    res.status(500).json({ error: "Error al obtener las novedades" });
  }
});

module.exports = router;
