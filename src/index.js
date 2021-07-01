document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form")
  newTaskForm.addEventListener("submit", createNewTask)
})



function createNewTask(e){
  e.preventDefault()
  const newTask = document.getElementById("new-task-description")
  const newTaskLi = document.createElement("li")
  const btn = document.createElement("button")
  btn.innerHTML = "x"
  const priority = document.getElementById("priority")
  newTaskLi.textContent = newTask.value
  plevel = priority.value
  
  if (plevel === "1"){
  newTaskLi.style.color = "#00FF00"
  document.getElementById("tasks").appendChild(newTaskLi).appendChild(btn)
  }

  if (plevel === "2"){
    newTaskLi.style.color = "#FFFF00"
    document.getElementById("tasks").appendChild(newTaskLi).appendChild(btn)
  }

  else if (plevel === "3"){
  newTaskLi.style.color = "#FF0000"
  document.getElementById("tasks").appendChild(newTaskLi).appendChild(btn)
  }

  btn.addEventListener('click', e => 
    e.target.parentElement.remove()
  )
}

