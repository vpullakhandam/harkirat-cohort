
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const taskPriority = document.getElementById('task-priority');
    const taskNotes = document.getElementById('task-notes');
    const themeToggle = document.getElementById('theme-toggle');
    const progressBar = document.getElementById('progress-bar');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let darkMode = localStorage.getItem('darkMode') === 'true';

    if (darkMode) {
        document.body.setAttribute('data-theme', 'dark');
    }

 
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = '';
        let completedTasks = 0;

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `${task.priority} ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleComplete(${index})">
                <span>${task.name}</span>
                <div class="actions">
                    <button class="edit" onclick="editTask(${index})">Edit</button>
                    <button class="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;

            if (task.notes) {
                const notesDiv = document.createElement('div');
                notesDiv.className = 'notes';
                notesDiv.textContent = `Notes: ${task.notes}`;
                li.appendChild(notesDiv);
            }

            if (task.completed) completedTasks++;
            taskList.appendChild(li);
        });

        
        const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;
        progressBar.style.width = `${progress}%`;

        saveTasks();
    }

    
    function addTask(task) {
        tasks.push(task);
        renderTasks();
    }

   
    function updateTask(index, newTask) {
        tasks[index] = newTask;
        renderTasks();
    }


    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

 
    window.toggleComplete = (index) => {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

  
    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        const priority = taskPriority.value;
        const notes = taskNotes.value.trim();

        if (task) {
            addTask({
                name: task,
                priority,
                notes,
                completed: false,
            });

            taskInput.value = '';
            taskNotes.value = '';
        }
    });

    // Handle editing tasks
    window.editTask = (index) => {
        const updatedTask = prompt('Edit Task:', tasks[index].name);
        if (updatedTask !== null) {
            tasks[index].name = updatedTask.trim();
            renderTasks();
        }
    };

    
    window.deleteTask = (index) => {
        if (confirm('Are you sure you want to delete this task?')) {
            deleteTask(index);
        }
    };

   
    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.setAttribute('data-theme', darkMode ? 'dark' : '');
        localStorage.setItem('darkMode', darkMode);
    });

    
    renderTasks();
});
