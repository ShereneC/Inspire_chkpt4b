export default class Task {
    constructor({ id, completed, user, description, checked }) {
        this.id = id,
            this.completed = completed,
            this.user = user,
            this.description = description
        this.checked = checked
    }

    get Template() {

        return `
        <li><span class="text-wrap"><input type="checkbox" id="complete" name="complete" value="checkedValue" class="mr-2" onclick="app.tasksController.toggle('${this.id}')" ${this.checked ? "checked" : ''} /></span>${this.description}<span class="action ml-2" onclick="app.listsController.removeTask('${this.id}')">✖</span></li>
        `
    }
}
