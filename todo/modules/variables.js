export const UI = {
  INPUT_FIELD: document.querySelectorAll('.input__field'),
  TASK_LIST: document.querySelectorAll('.task__list'),
  HIGH_LIST:document.getElementById('HIGH_TASKS'),
  HIGH_INPUT:document.getElementById('HIGH'),
  LOW_LIST:document.getElementById('LOW_TASKS'),
  LOW_INPUT:document.getElementById('LOW'),


  HIGH_BUTTON_VALUE: document.getElementById('highBtn')
}

export const PRIORITY = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
}

export let STORE = new Map()
