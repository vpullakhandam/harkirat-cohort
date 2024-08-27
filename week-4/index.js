const express = require("express");

const app = express();
const port = 3004;

app.use(express.json());

const todos = [];

// Get all todos
app.get("/todos", (req, res) => {
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
  if (todos.find((t) => t.id === parseInt(id))) {
    return res.status(400).send("Todo with this ID already exists.");
  }
  todos.push({ id: parseInt(id), description });
  res.status(201).send("Todo added successfully");
});

// Update an existing todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  if (!description) {
    return res.status(400).send("Field 'description' is required.");
  }
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).send("Todo not found");
  }
  todo.description = description;
  res.send("Todo updated successfully");
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send("Todo not found");
  }
  todos.splice(index, 1);
  res.send(`Todo with ID ${id} deleted successfully`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
