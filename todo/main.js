import {inputField, addTask, getInputValue, taskList} from './modules/view.js'

// Add task
inputField.forEach(currentInputField => currentInputField.onchange = function (e) {
  let inputValue = getInputValue(e)

  if (inputValue) {
    const currentBlock = currentInputField.closest('.task__block')

    currentInputField.closest('.task__input').onclick = function (e) {
      e.preventDefault()
      const addTaskBtn = currentInputField.nextElementSibling

      if (e.target === addTaskBtn) {
        addTask(inputValue, currentBlock)
        inputValue = ''
      }
    }
    currentInputField.closest('.task__input').onkeyup = function (e) {
      e.preventDefault()
      addTask(inputValue, currentBlock)
      inputValue = ''
    }
    e.target.value = ''
  }
})

// Task actions: done / remove
taskList.forEach(currentTaskList =>
  currentTaskList.addEventListener('click', function (e) {

    if (e.target.classList.contains('item__button-done')) {
      e.target.closest('.task__item').classList.add('_done')
    }

    if (e.target.classList.contains('item__button-cancel')) {
      e.target.closest('.task__item').remove()
    }
  })
)


// taskList.addEventListener('click', function (e) {
//   if (e.target.classList.contains('item__button-done')) {
//     e.target.closest('.task__item').classList.add('_done')
//   }
//   if (e.target.classList.contains('item__button-cancel')) {
//     e.target.closest('.task__item').remove()
//   }
// })
