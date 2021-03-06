const taskInput = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function addTask() {
    let htmlContainer = 
    `<div class="task">
        <div class="task__title">
            ${taskInput.value.trim()}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;

    tasksList.insertAdjacentHTML('beforeEnd', htmlContainer);
    removeTask();
    taskInput.value = '';
};

function removeTask() {
    if (tasksList.lastElementChild === null) {
        return;
    };
    tasksList.lastElementChild.querySelector('.task__remove').addEventListener('click', (event) => {
        event.target.closest('.task').remove();
    });
};

taskInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && taskInput.value.trim() != '') {
        addTask();
    };
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value.trim() != '') {
        addTask();
    };
});