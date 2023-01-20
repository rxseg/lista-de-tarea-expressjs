const express = require("express");
const deleteTask = express.Router();
const fs = require("fs");



deleteTask.delete("/:id", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const { id } = req.params;
  const eraser = db.filter((task) => task.id != id);
  fs.writeFileSync("db.json", JSON.stringify(eraser));
  res.json({ message: `Task ${id} have been deleted successfully` });
  res.end();
});

module.exports = deleteTask;