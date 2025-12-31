function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player = new Player("Steve", "X");
console.dir(player);

Player.prototype.sayHello = function () {
  console.log(`Hello, I'm a player!`);
};

player.sayHello();

// How Prototypes work
const person = {
  greet() {
    console.log("Hello!");
  },
};

const user = {
  name: "Sinha",
};

user.__proto__ = person;

user.greet();

// How to create Prototypal Links
// Method 1: Using Object.create -> This is the most recommended and cleanest way

const animal = {
  eat() {
    console.log("Eating...");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("woof!");
};

dog.eat(); // Inherited
dog.bark(); // Own method
