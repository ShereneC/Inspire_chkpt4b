import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


//Private
function _drawTasks() {
  let template = ''
  ProxyState.tasks.forEach(t => {
    template += t.Template
  })
  document.getElementById('tasks').innerHTML = template
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on('tasks', _drawTasks)
    this.getMyTasks()
  }
  async addTask(e) {
    try {
      console.log(e)
      e.preventDefault()
      let form = e.target
      let rawTask = {
        description: form.description.value
      }
      // console.log(rawTask)
      await tasksService.addTask(rawTask)
    } catch (error) {
      console.error(error)
    }
  }

  async getMyTasks() {
    try {
      await tasksService.getMyTasks()
    } catch (error) {
      console.log("couldn't get the tasklist:", error)
    }
  }

  toggle(id) {
    tasksService.toggle(id)
  }

}
