import { format } from "date-fns";

function addTask(value, block) {
  if (value) {
    console.log('добавляю')
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

    const date = getDate()
    taskText.textContent = `${date} ${value}`

    textContainer.append(doneBtn)
    textContainer.append(taskText)
    newTaskItem.append(textContainer)
    newTaskItem.append(cancelBtn)
    block.querySelector('.task__list').append(newTaskItem)
  }
}

function getDate() {
  let date = format(new Date(), 'dd.MM')
  console.log(date)
  return date
}

export {
  addTask,
};
