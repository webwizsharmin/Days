function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    const readStatus = this.isRead ? "read already" : "not read yet";
    console.log(`${this.name} by ${this.author}, ${this.pages}, ${readStatus}`);
  };
}
