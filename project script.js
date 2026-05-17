let form = document.getElementById("taskForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let taskInput = document.getElementById("taskInput");

    let priority = document.getElementById("priority").value;

    let taskText = taskInput.value;

    if (taskText === "") {

        alert("Please enter a task");

        return;
    }

    let li = document.createElement("li");

    li.classList.add(priority);

    li.innerHTML = `
        ${taskText} (${priority})
        <button class="delete-btn">Delete</button>
    `;

    let deleteButton = li.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function () {

        li.remove();

    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
});