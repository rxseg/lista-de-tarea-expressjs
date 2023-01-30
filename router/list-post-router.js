const express = require("express");
const postTask = express.Router();
const fs = require("fs");
const db = require("../db.json");
const attributes = require("../middlewares/attribute-post");
const voidPost = require("../middlewares/void-body");

postTask.post("/", voidPost, attributes, (req, res) => {
  const body = req.body;
  db.push(body);
  fs.writeFileSync("db.json", JSON.stringify(db), (error) => {
    if (err) throw err;
    console.log("Actualizado");
  });
  console.log({ body });
  res.json({ message: "Task created successfully" });
});

module.exports = postTask;
