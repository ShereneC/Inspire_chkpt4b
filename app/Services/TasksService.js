import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { tasksApi } from "./AxiosService.js";

class TasksService {
  async removeTask(id) {
    console.log('you are trying to remove a task', id)
    let chosenTask = ProxyState.tasks.find(t => t.id == id)
    const res = await tasksApi.delete(chosenTask.id)
    console.log(res.data)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
  async getMyTasks() {
    const res = await tasksApi.get('')
    console.log(res.data)
    ProxyState.tasks = res.data.map(t => new Task(t))
    console.log('tasklist proxystate:', ProxyState.tasks)
  }
  async toggle(id) {
    try {
      let found = ProxyState.tasks.find(t => t.id == id)
      console.log(found.completed)
      found.completed = !found.completed
      const res = await tasksApi.put(id, found)
      console.log(res.data)
      ProxyState.tasks = ProxyState.tasks
    }
    catch {
      console.error('Did not toggle')
    }
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

