let taskInput = document.getElementById("task");
let categoryInput = document.getElementById("category");
let dueDateInput = document.getElementById("dueDate");
let text = document.querySelector(".text ul");

function Add() {
    let task = taskInput.value;
    let category = categoryInput.value;
    let dueDate = dueDateInput.value;

    if (task === "") {
        alert("Please enter a task");
    } else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `
            <strong>Task:</strong> ${task}<br>
            <strong>Category:</strong> ${category}<br>
            <strong>Due Date:</strong> ${dueDate}<br>
            <span class="delete-task"><i class="fas fa-trash"></i></span>
        `;
        text.appendChild(newEle);
        taskInput.value = "";
        categoryInput.value = ""; // Reset the category dropdown to the default option.
        dueDateInput.value = "";

        newEle.querySelector(".delete-task").addEventListener("click", remove);
        function remove() {
            newEle.remove();
        }
    }
}
