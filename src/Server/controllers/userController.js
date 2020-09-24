const connection = require("../config/database");
connection.connect;

const agregar = (req, res) => {
  const agregarnombre = req.body.agregarnombre;
  const agregarapellido = req.body.agregarapellido;
  connection.query(
    "INSERT INTO registros SET ?",
    { Nombre_id: agregarnombre, Apellido_id: agregarapellido },
    function(error, results) {
      if (error) throw error;
      res.json({ respuesta: results });
    }
  );
};
const leer = (req, res) => {
  connection.query(
    "SELECT Registro_id ,Nombre_id, Apellido_id FROM registros",
    function(error, results) {
      if (error) throw error;
      res.json(results);
    }
  );
};

const leerById = (req, res) => {
  connection.query(
    "SELECT * FROM registros WHERE Registro_id = ?",
    [req.params.Registro_id],
    function(error, results) {
      if (error) throw error;
      res.json(results);
    }
  );
};

const modificar = (req, res) => {
  const modificarnombre = req.body.Nombre_id;
  const modificarapellido = req.body.Apellido_id;
  const id = req.params.Registro_id;
  connection.query(
    "UPDATE registros SET ? WHERE Registro_id=?",
    [{ Nombre_id: modificarnombre, Apellido_id: modificarapellido }, id],
    function(error, results) {
      if (error) throw error;
      res.json({ respuesta: results });
    }
  );
};

const borrar = (req, res) => {
  connection.query(
    "DELETE FROM registros WHERE Registro_id = ?",
    [req.params.Registro_id],
    function(error, results) {
      if (error) throw error;
      res.json(results);
    }
  );
};

module.exports = {
  agregar,
  leer,
  leerById,
  borrar,
  modificar,
};
