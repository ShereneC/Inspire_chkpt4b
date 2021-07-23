import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { tasksApi } from "./AxiosService.js";

class TasksService {
  async getMyTasks() {
    const res = await tasksApi.get('')
    console.log(res.data)
    ProxyState.tasks = res.data.map(t => new Task(t))
    console.log('tasklist proxystate:', ProxyState.tasks)
  }
  toggle(id) {
    let found = ProxyState.tasks.find(t => t.id == id)
    found.checked = !found.checked
    ProxyState.tasks = ProxyState.tasks
  }

  async addTask(rawTask) {
    console.log('you are trying to add a task(service addTask)')
    // console.log(rawTask)
    const res = await tasksApi.post('', rawTask)
    // console.log(res.data)
    ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
  }

}

export const tasksService = new TasksService();

