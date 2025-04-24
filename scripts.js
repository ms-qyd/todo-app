// Select DOM elements
const addButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

if (newTaskInput) {
    newTaskInput.value = 'Task ' + ++globalCounter;

    // Add new task function
    addButton.addEventListener('click', function () {
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
            li.addEventListener('click', function () {
                li.classList.toggle('completed');
            });

            // Delete task on button click
            deleteButton.addEventListener('click', function (event) {
                event.stopPropagation();
                taskList.removeChild(li);
            });
        }
    });

    // Optional: Allow pressing Enter to add task
    newTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });

}

// ============================================================
// Page 2
// ============================================================


let pomodoroDuration = 25 * 60 * 1000; // in milliseconds
let shortBreak = 5 * 60 * 1000;
let longBreak = 15 * 60 * 1000;
let currentTime = pomodoroDuration;
let timerInterval = null;
let isRunning = false;
let cycleCount = 0;
let lastTimestamp = null;

function updateDisplay() {
    const totalSeconds = Math.floor(currentTime / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(Math.floor((currentTime % 1000) / 10)).padStart(2, '0'); // 2-digit ms
    document.getElementById('timer').textContent = `${minutes}:${seconds}.${milliseconds}`;
}

function tick(delta) {
    currentTime -= delta;
    if (currentTime <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        cycleCount++;

        if (cycleCount % 4 === 0) {
            currentTime = longBreak;
            document.getElementById('pomodoro-status').textContent = 'Long Break';
        } else if (cycleCount % 2 === 0) {
            currentTime = pomodoroDuration;
            document.getElementById('pomodoro-status').textContent = 'Focus Time';
        } else {
            currentTime = shortBreak;
            document.getElementById('pomodoro-status').textContent = 'Short Break';
        }

        updateDisplay();
        startTimer();
    } else {
        updateDisplay();
    }
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    lastTimestamp = performance.now();

    timerInterval = setInterval(() => {
        const now = performance.now();
        const delta = now - lastTimestamp;
        lastTimestamp = now;
        tick(delta);
    }, 113);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    currentTime = pomodoroDuration;
    document.getElementById('pomodoro-status').textContent = 'Focus Time';
    updateDisplay();
}

updateDisplay();
