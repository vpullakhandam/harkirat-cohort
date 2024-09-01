const express = require("express");
const app = express();

let requestCount = 0;

app.use(function (req, res, next) {
  requestCount++;
  const now = new Date();
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = now.toLocaleTimeString();
  console.log(requestCount);
  console.log(method);
  console.log("http://localhost:3005" + url);
  console.log(timestamp);
  next();
});

app.get("/", function (req, res) {
  res.send("hello!");
});

app.get("/request-count", (req, res) => {
  res.json({
    message: "Total number of requests",
    count: requestCount,
  });
});

app.listen(3005);
