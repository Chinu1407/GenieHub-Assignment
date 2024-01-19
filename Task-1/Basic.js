// Basic Code to print Hello World
Aconsole.log("Hello World")

// Variables
let a=5
console.log(a)

let str="Charlie"
console.log(str)

// Display variables in the console
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is a student? " + isStudent);

// Conditional statement in Javascript
if (age >= 18) {
    console.log(name + " is an eligible for vote.");
} else {
    console.log(name + " is a minor and not eligible for vote.");
}

// Array and loop
var hobbies = ["reading", "playing games", "coding"];

console.log("Hobbies:");
for (var i = 0; i < hobbies.length; i++) {
    console.log("- " + hobbies[i]);
}

// Function
function greet(personName) {
    return "Hello, " + personName + "!";
}

// Calling  the function
var greeting = greet(name);
console.log(greeting);

// Object
var person = {
    name: "Alice",
    age: 30,
    isStudent: true,
    greet: function() {
        return "Hi, I'm " + this.name + "!";
    }
};

// Access properties and call method
console.log(person.name + " is " + person.age + " years old.");
console.log(person.greet());

// Event handling (in a browser environment)
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

ES6:-const,let
// Const 
const name = 'Charlie';
console.log(name); 
// Will print 'Charlie' to the console.

// Let
let name = 'Charlie';
console.log(name); 
// Prints Charlie

let org_name;
org_name = "BroCharlie";
console.log(org_name); 
// Prints BroCharlie
