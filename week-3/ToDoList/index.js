// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    // Add a new task
    function addTask(task) {
        tasks.push(task);
        renderTasks();
    }

    // Update an existing task
    function updateTask(index, newTask) {
        tasks[index] = newTask;
        renderTasks();
    }

    // Delete a task
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    // Render tasks in the list
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <div class="actions">
                    <button class="edit" onclick="editTask(${index})">Edit</button>
                    <button class="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Handle adding tasks
    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }
    });

    // Handle editing tasks
    window.editTask = (index) => {
        const newTask = prompt('Edit Task:', tasks[index]);
        if (newTask !== null) {
            updateTask(index, newTask.trim());
        }
    };

    // Handle deleting tasks
    window.deleteTask = (index) => {
        if (confirm('Are you sure you want to delete this task?')) {
            deleteTask(index);
        }
    };
});
