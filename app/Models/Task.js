export default class Task {
    constructor({ id, completed, user, description, checked }) {
        this.id = id,
            this.completed = completed || false,
            this.user = user,
            this.description = description
    }

    get Template() {

        return /*html*/`
        <li class="text-light">
          <span class="text-wrap text-break">
            <input type="checkbox" id="complete" name="complete" value="checkedValue" class="mr-2" onclick="app.tasksController.toggle('${this.id}')" ${this.completed ? "checked" : ''} />
          </span>
          <span>${this.description}</span>
          <span class="action ml-2 text-right" onclick="app.tasksController.removeTask('${this.id}')"><span class="fa fa-trash text-red"></span></span>
          </li>
        `
    }
}
