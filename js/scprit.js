import DisplayToday from "./modules/DisplayToday.js";
import TodoList from "./modules/TodoList.js";

const displayToday = new DisplayToday(".today");
displayToday.init();

const todoList = new TodoList(".create-button", ".todo-list");
todoList.init();

const darkModeButton = document.getElementById('dark-mode-button');
    const body = document.body;

    darkModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
