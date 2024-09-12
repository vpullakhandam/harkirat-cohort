const express = require("express");
const cors = require("cors");
const app = express();
const port = 3006;

// Middleware
app.use(express.json());
app.use(cors());

// In-memory storage for users and todos
const users = [];

// Sign-Up Endpoint
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password, todos: [] });
  res.status(201).json({ message: "User registered successfully" });
});

// Sign-In Endpoint
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(400).json({ message: "Invalid username or password" });
  }
});

// Add TODO Endpoint
app.post("/todos", (req, res) => {
  const { username, password, todo } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user && todo) {
    user.todos.push({ text: todo, completed: false });
    res.status(200).json({ message: "Todo added", todos: user.todos });
  } else {
    res.status(400).json({ message: "User not found or todo text missing" });
  }
});

// Toggle TODO Completion Endpoint
app.put("/todos/:index", (req, res) => {
  const { username, password } = req.body;
  const { index } = req.params;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user && user.todos[index]) {
    user.todos[index].completed = !user.todos[index].completed;
    res.status(200).json({ message: "Todo updated", todos: user.todos });
  } else {
    res.status(400).json({ message: "User or todo not found" });
  }
});

// Delete TODO Endpoint
app.delete("/todos/:index", (req, res) => {
  const { username, password } = req.body;
  const { index } = req.params;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user && user.todos[index]) {
    user.todos.splice(index, 1);
    res.status(200).json({ message: "Todo deleted", todos: user.todos });
  } else {
    res.status(400).json({ message: "User or todo not found" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
