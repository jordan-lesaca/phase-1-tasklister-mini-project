document.addEventListener("DOMContentLoaded", () => {

const newTaskForm = document.getElementById("create-task-form")


newTaskForm.addEventListener("submit", createNewTask)
})

function createNewTask(event){
  const newTaskDescription = document.getElementById("new-task-description")
  const newTaskLi = document.createElement("li")
  newTaskLi.innerText = newTaskDescription.value
  appendNewTaskLi(newTaskLi)
  event.preventDefault()
}

function appendNewTaskLi(task){
document.getElementById("tasks").appendChild(task)
}