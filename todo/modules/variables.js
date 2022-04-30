export const UI = {
  INPUT_FIELD: document.querySelectorAll('.input__field'),
  TASK_LIST: document.querySelectorAll('.task__list'),

  HIGH_BUTTON_VALUE: document.getElementById('highBtn')
}

export const PRIORITY = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
}

export function Task(value, priority) {
  this.value = value
  this.priority = priority
}

const defaultTask1 = new Task('Do homework!', 'high')
const defaultTask2 = new Task('Do workout!', 'low')

let entriesDefaultTask1 = Object.entries(defaultTask1)
let entriesDefaultTask2 = Object.entries(defaultTask2)

export let STORE = new Map([entriesDefaultTask1, entriesDefaultTask2])
console.log(defaultTask1, STORE)
