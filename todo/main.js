import {addTask} from './modules/view.js'
import {UI} from './modules/variables.js'


// Add task
UI.INPUT_FIELD.forEach(currentInputField => currentInputField.onchange = function (e) {
  e.preventDefault()
  let inputValue = e.target.value.trim()
  if (!inputValue) return

  console.log(inputValue, currentInputField.id, e.target)

  const currentBlock = currentInputField.closest('.task__block')

  currentInputField.closest('.task__input').onclick = function (e) {
    e.preventDefault()
    const addTaskBtn = currentInputField.nextElementSibling

    if (e.target === addTaskBtn) {
      addTask(inputValue, currentBlock)
      inputValue = ''
    }
  }
  // currentInputField.closest('.task__input').onkeyup = function (e) {
  //   e.preventDefault()
  //   addTask(inputValue, currentBlock)
  //   inputValue = ''
  // }
  e.target.value = ''
})

// Task actions: done / remove
UI.TASK_LIST.forEach(currentTaskList =>
  currentTaskList.addEventListener('click', function (e) {

    if (e.target.classList.contains('item__button-done')) {
      e.target.closest('.task__item').classList.add('_done')
    }

    if (e.target.classList.contains('item__button-cancel')) {
      e.target.closest('.task__item').remove()
    }
  })
)

// Get task from input
function getInputValue(e) {
  if (e.target.value) {
    return e.target.value.trim()
  }
}
