export default class Quote {
  constructor({ _id, content, author }) {
    this._id = _id;
    this.content = content;
    this.author = author;
  }

  get Template() {
    return `
    <h2 class="content fontshadow text-light">${this.content}</h2>
    <h3 class="author hide fontshadow text-light">${this.author}</h3>
    `
  }
}