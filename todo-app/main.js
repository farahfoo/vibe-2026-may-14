
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '✖';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            taskList.removeChild(taskItem);
        });

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});
