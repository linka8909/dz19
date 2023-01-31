let addButton = document.querySelector(".add-button");

let addTask = document.querySelector(".add-task");

let addTaskAddButton = document.querySelector(".add-task-add-button");

let input = document.querySelector(".input");

let toDo = document.querySelector(".im");


addButton.addEventListener("click", () => {
    addTask.classList.add("flex");
})

addTaskAddButton.addEventListener("click", () => {
	toDo.innerHTML += '<p class="par">' + input.value + '</p>';
	input.value = "";
    addTask.classList.remove("flex");
})