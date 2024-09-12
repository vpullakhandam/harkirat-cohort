const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "harkirat123";
const app = express();
app.use(express.json());
app.use(express.static("public"));

const users = [];

function logger(req, res, next) {
  console.log(req.method + " request came");
  next();
}

app.post("/signup", logger, function (req, res) {
  const { username, password } = req.body;
  // Check if user already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.json({ message: "You are signed up" });
});

app.post("/signin", logger, function (req, res) {
  const { username, password } = req.body;
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!foundUser) {
    return res.json({ message: "Credentials incorrect" });
  } else {
    const token = jwt.sign({ username: username }, JWT_SECRET);
    res.json({ token: token });
  }
});

function auth(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
      req.username = decodedData.username;
      next();
    }
  } catch (error) {
    res.json({ message: "You are not logged in" });
  }
}

app.get("/me", logger, auth, function (req, res) {
  const foundUser = users.find((user) => user.username === req.username);
  if (foundUser) {
    res.json({ username: foundUser.username });
  } else {
    res.json({ message: "User not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
