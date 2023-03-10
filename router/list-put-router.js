const express = require("express");
const putTask = express.Router();
const fs = require("fs");

putTask.put("/:id", express.json(), (req, res) => {
  const id = req.params.id;
  const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  db.forEach((item) => {
    if (item.id == id) {
      item.nombre = req.body.nombre;
      item.descripcion = req.body.descripcion;
      item.estado = req.body.estado;
    }
  });
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.json({ message: `Task ${id} have been updated` });
  res.end();
});
module.exports = putTask;
