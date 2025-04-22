const router = require("../routes/admin/novedades");
var { pool, mssql, connectDB } = require("./bd");

/*para listar las novedades */
async function getNovedades() {
  try {
    var pool = await connectDB(); //aseguro que se este conectando
    var result = await pool
      .request()
      .query("SELECT * FROM novedades ORDER BY id ASC");
    return result.recordset; //creo que devuelve un objeto o el array con los los id,titulo,subtitulo y cuerpo.
  } catch (error) {
    console.error("Error al obtener las novedades ", error);
    return [];
  }
}

async function insertNovedad(obj) {
  try {
    

    //convertir objeto con null prototype a objeto pleno
    //const datos = JSON.parse(JSON.stringify(novedad));
    var pool = await connectDB();
    var request = pool.request();
    /*
    console.log("titulo:", obj.titulo); prueba de que se reciben el registro
    console.log("subtitulo:", obj.subtitulo);
    console.log("cuerpo:", obj.cuerpo);*/

    request.input("valor2", mssql.VarChar, obj.titulo);
    request.input("valor3", mssql.VarChar, obj.subtitulo);
    request.input("valor4", mssql.Text, obj.cuerpo);
    var query = `INSERT novedades (titulo,subtitulo,cuerpo) VALUES (@valor2,@valor3,@valor4)`;

    var result = await request.query(query);
    //console.log("metodo insertNovedad resultado del insert", result);//verifico que se envie
    return result;
  } catch (error) {
    console.log("error al insertar", error);
    throw error;
  }
}

module.exports = { getNovedades, insertNovedad };
