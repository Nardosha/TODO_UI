export class Storage {
    priority = 'LOW'
    storage = localStorage


    constructor(key, value, priority, date, storage) {
        this.key = key
        this.value = value
        this.priority = priority
        this.date = date
        this.storage = storage

    }
    get() {
         const taskInfo = window[this.storage].getItem(this.key);
         return JSON.parse(taskInfo)
    }
    set() {
        const taskInfo = JSON.stringify(this)
        window[this.storage].setItem(this.key, taskInfo);
    }
    isEmpty() {
        return !!window[this.storage][this.key]
    }
    clear() {
        delete window[this.storage][this.key];
    }
}
