const express = require("express");
const postTask = express.Router();
const fs = require("fs");
const db = require("../db.json");
const attributes = require("../middlewares/attribute-post");
const voidPost = require("../middlewares/void-body");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const users = [{ email: "robert@gmail.com" }, { email: "franco@gmail.com" }];

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

postTask.post("/login", voidPost, function (req, res) {
  const userInfo = users.map((user) => {
    if (user.email == req.body.email) {
      return user;
    }
  });
  if (userInfo.length === 0) {
    res.status(401).send({ error: "Invalid user name or password" });
  } else {
    const token = jwt.sign(userInfo[0], process.env.SECRET_KEY);

    res.json({ token });
  }
});
postTask.get("/verify", function (req, res) {
  const token = req.header("Authorization");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    res.send("Token autenticado pá, eres un crack");
  } catch (e) {
    res.json({ e });
  }
});

module.exports = postTask;
