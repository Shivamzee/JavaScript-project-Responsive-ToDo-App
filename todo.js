console.log("This app is working , code by shivam sharma");

// selecting elements from html file

const getToDoform = document.querySelector("#todo-form");
const todoList = document.querySelector(".todos");
const remainingTasksbtn = document.querySelector("#remaining-tasks");
const completedTasksbtn = document.querySelector("#completed-tasks");
const totalTasksbtn = document.querySelector("#total-tasks");

// targeting input box
const mainInputBox = document.querySelector("#todo-form input");

let tasksList = JSON.parse(localStorage.getItem("tasksList")) || [];
if (localStorage.getItem("tasksList")) {
  tasksList.map((task) => {
    createTasks(task);
    // console.log(task);
  });
}

getToDoform.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputValue = mainInputBox.value;
  // console.log(inputValue);

  if (inputValue === "") {
    return;
  }

  const task = {
    id: new Date().getTime(),
    tName: inputValue,
    isCompleted: false,
  };

  // console.log(task);
  // console.log(task.name);

  tasksList.push(task);
  localStorage.setItem("tasksList", JSON.stringify(tasksList));
  createTasks(task);
  mainInputBox.focus();
  getToDoform.reset();
});

function createTasks(task) {
  const taskEl_li = document.createElement("li");
  taskEl_li.setAttribute("id", task.id);

  if (task.isCompleted) {
    taskEl_li.classList.add("completed");
  }

  const taskEl_html = `
      <div>
          <input type="checkbox" name="tasks" id=" ${task.id} " ${
    task.isCompleted ? "chacked" : " "
  } />
                <span  ${!task.isCompleted ? "contenteditable" : ""} >${
    task.tName
  }</span>
      </div>

          <button title="Remove the" ${task.tName}  class="remove-task">
          <i class="uil uil-multiply"></i>
          </button>

      `;

  // console.log(taskEl_html);
  taskEl_li.innerHTML = taskEl_html;

  // console.log(taskEl_li);

  todoList.appendChild(taskEl_li);
  countTasks();
}

function countTasks() {
  const completedTasksList = tasksList.filter((task) => {
    task.isCompleted === true;
  });

  totalTasksbtn.textContent = tasksList.length;
  completedTasksbtn.textContent = completedTasksList.length;
  remainingTasksbtn.textContent = tasksList.length - completedTasksList.length;
}
