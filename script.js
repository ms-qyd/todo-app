// Select DOM elements
const addButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

newTaskInput.value = 'Task ' + ++globalCounter;

// Add new task function
addButton.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();

    if (taskText) {
        // Create a new list item
        const li = document.createElement('li');
        li.classList.add('task');

        // Create task content
        const span = document.createElement('span');
        span.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        // Append elements
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear input field
        newTaskInput.value = 'Task ' + ++globalCounter;

        // Toggle task completion on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Delete task on button click
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            taskList.removeChild(li);
        });
    }
});

// Optional: Allow pressing Enter to add task
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});