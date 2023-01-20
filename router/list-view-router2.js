const express = require("express");
const tareasIncompletas = express.Router();
const db = require("../db.json");

tareasIncompletas.get("/", (req, res) => {
  const filter = db.filter((item) => item.estado === false);
  res.json(filter);
  res.end();
});
module.exports = tareasIncompletas;
