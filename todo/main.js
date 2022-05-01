import {addTask, deleteTask} from './modules/view.js'
import {STORE, UI} from './modules/variables.js'
import {Storage} from './modules/Storage.js'
import {getDate, getId, loadFromLocalStorage, loadFromSessionStorage} from "./modules/helpers.js";


loadFromSessionStorage()
loadFromLocalStorage()

UI.INPUT_FIELD.forEach(currentInputField => currentInputField.onchange = function (e) {
  e.preventDefault()
  let inputValue = e.target.value.trim()
  if (!inputValue) return

  const currentBlock = currentInputField.closest('.task__block')
  console.log(currentBlock)

  currentInputField.closest('.task__input').onclick = function (e) {
    e.preventDefault()
    const addTaskBtn = currentInputField.nextElementSibling

    if (e.target === addTaskBtn) {
      const id = getId()
      const date = getDate()
      const testTask = new Storage(id, inputValue, currentInputField.id, date, 'localStorage')
      testTask.set()
      STORE.set(id, testTask)

      console.log(testTask.isEmpty())

      addTask(id, inputValue, currentInputField.id, date)
      console.log(id)
      console.log(STORE)
    }
  }
  e.target.value = ''
})

// Task actions: done / remove
UI.TASK_LIST.forEach(currentTaskList =>
  currentTaskList.addEventListener('click', function (e) {

    if (e.target.classList.contains('item__button-done')) {
      e.target.closest('.task__item').classList.add('_done')
    }

    if (e.target.classList.contains('item__button-cancel')) {
      let idElement = e.target.closest('.task__item').id
      deleteTask(idElement)
    }
  })
)

// TODO Слушаталей отформатировать
// TODO Сохранять статус задачи в класс Storage
