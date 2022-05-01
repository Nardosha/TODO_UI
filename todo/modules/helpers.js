import {STORE} from "./variables";
import {format} from "date-fns";
import {Storage} from "./Storage";
import {addTask} from "./view";

export function getDate() {
  return format(new Date(), 'dd.MM')

}

export function getId() {
  const id = Math.floor(Math.random()*10000);
  while (!STORE.has(id)) {
    console.log(STORE, id)
    return id
  }
}

export function loadFromLocalStorage() {
  let keys = Object.keys(localStorage)
  if (!keys) return

  for (let key of keys) {
    let value = JSON.parse(localStorage[key])
    let task = new Storage(value.key, value.value, value.priority, value.date, value.storage)

    if (!STORE.has(key)) {
      STORE.set(key, task)
    }
    addTask(task.key, task.value, task.priority, value.date)
  }
}

export function loadFromSessionStorage() {
  let keys = Object.keys(sessionStorage)
  if (!keys) return

  for (let key of keys) {
    let value = JSON.parse(sessionStorage[key])
    let task = new Storage(value.key, value.value, value.priority, value.date, value.storage)

    if (!STORE.has(key)) {
      STORE.set(key, task)
    }
    addTask(task.key, task.value, task.priority, value.date)
  }
}
