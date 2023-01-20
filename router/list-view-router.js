const express = require("express");
const tareasCompletas = express.Router();
const db = require("../db.json");

tareasCompletas.get("/", (req, res) => {
  const filter = db.filter((item) => item.estado === true);
  res.json(filter);
  res.end();
});
module.exports = tareasCompletas;
