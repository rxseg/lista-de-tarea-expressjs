const express = require("express");
const postTask = express.Router();
const fs = require("fs");
const db = require("../db.json");

postTask.post("/", express.json(), (req, res) => {
  const body = req.body;
  db.push(body);
  fs.writeFileSync("db.json", JSON.stringify(db), (error) => {
    if (err) throw err;
    console.log("Actualizado");
  });
  res.json({ message: "Task created successfully" });
  res.end();
});

module.exports = postTask;
