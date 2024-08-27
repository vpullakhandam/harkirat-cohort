const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3005;

const TODOS_FILE = path.join(__dirname, "todos.json");

app.use(express.json());

const readTodos = () => {
    if (!fs.existsSync(TODOS_FILE)) {
      fs.writeFileSync(TODOS_FILE, "[]"); // Create the file with an empty array
    }
    
    const data = fs.readFileSync(TODOS_FILE, "utf8");
    
    // If the file is empty, return an empty array
    if (!data.trim()) {
      return [];
    }
    
    try {
      return JSON.parse(data);
    } catch (err) {
      console.error("Error parsing JSON:", err);
      return [];
    }
  };
  

// Helper function to write todos to the file
const writeTodos = (todos) => {
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
};

// Get all todos
app.get("/todos", (req, res) => {
  const todos = readTodos();
  if (todos.length === 0) {
    return res.send("No todos to show");
  }
  res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const { id, description } = req.body;
  if (!id || !description) {
    return res.status(400).send("Fields 'id' and 'description' are required.");
  }

  const todos = readTodos();
  if (todos.find((t) => t.id === id)) {
    return res.status(400).send("Todo with this ID already exists.");
  }

  todos.push({ id, description });
  writeTodos(todos);
  res.status(201).send("Todo added successfully");
});

// Update an existing todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  if (!description) {
    return res.status(400).send("Field 'description' is required.");
  }

  const todos = readTodos();
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  todo.description = description;
  writeTodos(todos);
  res.send("Todo updated successfully");
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todos = readTodos();
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).send("Todo not found");
  }

  todos.splice(index, 1);
  writeTodos(todos);
  res.send(`Todo with ID ${id} deleted successfully`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
