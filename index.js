const express = require("express");
const app = express();
const port = 8080;
const postTask = require("./router/list-post-router");
const tareasCompletas = require("./router/list-view-router");
const tareasIncompletas = require("./router/list-view-router2");
const putTask = require("./router/list-put-router");
const db = require("./db.json");
const deleteTask = require("./router/list-delete-router");
//Routers
app.use("/completed-tasks", tareasCompletas);
app.use("/incompleted-tasks", tareasIncompletas);
app.use("/tasks", postTask);
app.use("/tasks", putTask);
app.use("/tasks", deleteTask);
//Vista principal
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Task List server ");
  res.send();
});
//Vista de tareas
app.get("/tasks", (req, res) => {
  res.json(db);
  res.end();
});

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});
