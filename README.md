# JavaScript-project-Responsive-ToDo-App

<b> This is a responsive todo app, it has the feature to tell you the stats of your daily tasks . It uses localStorage to store your data.a</b>


 `
      <div>
      <input type="checkbox" name="tasks" id=" ${task.id} " ${
    task.isCompleted ? "chacked" : " "
  } />
      <span  ${!task.isCompleted ? "contenteditable" : " "} >${
    task.tName
  }</span>
      </div>

      <button title="Remove the" ${task.tName}  class="remove-task">
      <i class="uil uil-multiply"></i>
      </button>


  `