const express = require("express");
const app = express();

app.use(function (req, res, next) {
  const now = new Date();
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = now.toLocaleTimeString();
  console.log(method);
  console.log("http://localhost:3005" + url);
  console.log(timestamp);
  next();
});

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello!");
});

app.post("/postEndpoint", function (req, res) {
  res.send("this is the postEndpoint");
});

app.put("/putEndpoint", function (req, res) {
  res.send("this is the putEndpoint");
});

app.delete("/deleteEndpoint", function (req, res) {
  res.send("this is the deleteEndpoint");
});

app.listen(3005);
