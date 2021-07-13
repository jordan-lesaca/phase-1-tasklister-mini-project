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
  pLevel = priority.value
  document.getElementById("tasks").appendChild(newTaskLi).appendChild(btn)
  
  setTaskColor(pLevel, newTaskLi)

  listenRemove(e, btn)
}

function listenRemove(e, btn){
  btn.addEventListener('click', e => 
    e.target.parentElement.remove()
  )
}

function setTaskColor(pLevel, newTaskLi){
  if (pLevel === "1"){
    newTaskLi.style.color = "#00FF00"
  } else if (pLevel === "2"){
    newTaskLi.style.color = "#FFFF00"
  } else if(pLevel === "3"){
    newTaskLi.style.color = "#FF0000" 
  }
}