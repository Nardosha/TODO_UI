const inputField = document.querySelectorAll('.input__field')
const taskList = document.querySelectorAll('.task__list')

function addTask(value, block) {
  if (value) {
    const newTaskItem = document.createElement('div')
    const doneBtn = document.createElement('div')
    const cancelBtn = document.createElement('div')
    const taskText = document.createElement('div')

    newTaskItem.classList.add('task__item')
    doneBtn.classList.add('item__button-done')
    cancelBtn.classList.add('item__button-cancel')
    taskText.classList.add('task__text')
    taskText.textContent = value

    newTaskItem.append(doneBtn)
    newTaskItem.append(cancelBtn)
    newTaskItem.append(taskText)
    block.querySelector('.task__list').append(newTaskItem)
  }
}

function getInputValue(e) {
  e.preventDefault()
  if (e.target.value) {
    return e.target.value
  }
}

export {
  inputField,
  taskList,
  addTask,
  getInputValue
};
