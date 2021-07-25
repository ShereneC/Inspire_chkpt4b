export default class Quote {
  constructor({ _id, content, author }) {
    this._id = _id;
    this.content = content;
    this.author = author;
  }

  get Template() {
    return `
    <h3 class="content">${this.content}</h3>
    <h4 class="author hide">${this.author}</h4>
    `
  }
}