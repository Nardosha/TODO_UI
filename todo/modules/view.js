import {UI, STORE} from "./variables";

function addTask(key, value, priority, date) {
  if (value) {
    const fieldPriority = priority === 'HIGH' ? UI.HIGH_LIST : UI.LOW_LIST
    const newTaskItem = document.createElement('div')
    const textContainer = document.createElement('div')
    const doneBtn = document.createElement('div')
    const cancelBtn = document.createElement('div')
    const taskText = document.createElement('div')

    newTaskItem.classList.add('task__item')
    textContainer.classList.add('task__item_container')
    doneBtn.classList.add('item__button-done')
    cancelBtn.classList.add('item__button-cancel')
    taskText.classList.add('task__text')

    newTaskItem.id = `${key}`
    taskText.textContent = `${date} ${value}`

    textContainer.append(doneBtn)
    textContainer.append(taskText)
    newTaskItem.append(textContainer)
    newTaskItem.append(cancelBtn)
    fieldPriority.querySelector('.task__list').append(newTaskItem)
  }
}



function deleteTask(id) {
  const taskElem = document.getElementById(`${id}`)
  const task = STORE.get(id)
  taskElem.remove()
  task.clear()
  STORE.delete(id)
}

export {
  addTask,
  deleteTask
};
