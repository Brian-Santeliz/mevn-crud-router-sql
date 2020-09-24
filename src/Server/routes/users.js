const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/leer", controller.leer);
router.get("/leer/:Registro_id", controller.leerById);
router.post("/agregar", controller.agregar);
router.put("/modificar/:Registro_id", controller.modificar);
router.delete("/borrar/:Registro_id", controller.borrar);

module.exports = router;
