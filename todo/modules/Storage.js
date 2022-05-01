export class Storage {
    constructor(key, value, priority, date, storage) {
        this.key = key
        this.value = value
        this.priority = priority
        this.date = date
        this.storage = storage

    }
    get() {
         try {
           const taskInfo = window[this.storage].getItem(this.key);
           return JSON.parse(taskInfo)
         } catch (e) {
           console.log(e)
           alert('Erroe!')
         }
    }
    set() {
      try {
        const taskInfo = JSON.stringify(this)
        window[this.storage].setItem(this.key, taskInfo);
      } catch (e) {
        console.log(e)
        alert('Error!')
      }
    }
    isEmpty() {
        return !!this.get() ?? false
    }
    clear() {
        window[this.storage].removeItem(this.key);
    }
}
