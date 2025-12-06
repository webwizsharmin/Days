// Creating object using object literal
const person = {
  name: "Sinha",
  age: 22,
  isDev: true,
};

//  Creating object using new object
let car = new Object();
car.name = "Tesla";
car.model = 5090;

// using Constructor function
function camera(name, model) {
  this.name = name;
  this.model = model;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and my model is ${this.model}`);
  };
}

let c = new camera("canon", "EOS 250D");

console.log(c);

// creating object using class ES6 Model

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

let b1 = new Book("Time Management", "Brayan Tracy");
let b2 = new Book("Atomic Habit", "James clear");
console.log(b1);
console.log(b2);

// Accessing and manupulating properties
person.age; // dot notation
person["isDev"]; // bracket notation

// Add or modify
person.city = "Dhaka";
person.age = 23;

// Delete property
delete person.city;

// Method in objects

car.start = function () {
  console.log("starting...");
};

car.start();

// This keyword
person.greet = function () {
  console.log("Hi " + this.name);
};

person.greet();

//  Nested Objects
let user = {
  name: "Boss",
  address: {
    city: "Dhaka",
    zip: 1234,
  },
};

// Using Objects Built-in Methods
const keys = Object.keys(user);
console.log(keys);

const values = Object.values(user);
console.log(values);

const entries = Object.entries(user);
console.log(entries);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 1, c: 3 };
const obj3 = { c: 1, d: 2 };

const mergedObject = Object.assign({}, obj1, obj2, obj3);

console.log(mergedObject);

Object.freeze(user);
Object.seal(user);
user.name = "Eaty";
user.class = 10;

const water = {
  brand: "mum",
  price: 20,
};

Object.seal(water);
water.brand = "Jibon";

// Looping through Object
