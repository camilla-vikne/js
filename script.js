let person = "Camilla";
console.log(person);

// Operators, +, -, * , /

let x = 4;
let y = 5;

let a = 6;
let b = 10;
let c = a - b;
console.log(c);

//COmparison operators: ===, <, >, <=,>=, !==
if (x > y) {
  console.log("x is bigger than y");
} else {
  console.log("x is not bigger than  y");
}

const userName = "Camilla";
const userAge = 36;
const acceptedTOS = false;

//if- else- else if
if (!acceptedTOS) {
  console.log("Has not accepted");
} else {
  console.log("Has accepted");
}
if (userName) {
  console.log("You have given a user name");
} else {
  console.log("Please give a user name");
}

if (userAge <= 10) {
  console.log("you are not old enough");
} else if (userAge >= 18) {
  console.log("You are old, but not old enough");
} else {
  console.log("Please log in");
}

/**
 * Dette er en kommentar
 * som går over flere linjer
 * Den vil ikke gå ut av kommentaren før
 * man trykker seg utenfor kommentaren
 */
// || (OR) operator, && and operator
if (userName === "Camilla" && userAge === 18) {
  console.log("You are Camilla, and you are old enough");
} else if (userName === "Per") {
  console.log("You are not Camilla");
} else {
  console.log("Default");
}

let user = {
  firstName: "Camilla",
  lastName: "Vikne",
  age: 36,
  hobbies: ["gaming", "knitting", "reading"],
  pets: 2,
  petNames: ["Slush", "Ceara"],
};

console.log(user.hobbies[1]);
let greeting = "God morgen, ";
console.log(greeting + userName);
const greetings = `Good morning, ${user.firstName}`;
console.log(greetings);

let fruits = ["Kiwi", "Apple", "Pear", "Banana", "Mango"];
fruits[3] = "Cherries";
console.log(fruits);

// ternery
const userMale = true;
const userTitle = userMale ? "Mr" : "Mrs";
console.log(userTitle);
