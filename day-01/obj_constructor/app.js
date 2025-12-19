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

const timeManagement = new Book("Time Management", "Bryan Tracy", 187, true);

timeManagement.info();
