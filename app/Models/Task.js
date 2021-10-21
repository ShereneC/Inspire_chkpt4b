export default class Task {
    constructor({ id, completed, user, description, checked }) {
        this.id = id,
            this.completed = completed || false,
            this.user = user,
            this.description = description
    }

    get Template() {

        return /*html*/`
        <li class="fontshadow">
          <span class="text-wrap text-break">
            <input type="checkbox" id="complete" name="complete" value="checkedValue" class="mr-2" onclick="app.tasksController.toggle('${this.id}')" ${this.completed ? "checked" : ''} />
          </span>
          ${this.description}
          <span class="action ml-2" onclick="app.tasksController.removeTask('${this.id}')">✖</span>
          </li>
        `
    }
}
