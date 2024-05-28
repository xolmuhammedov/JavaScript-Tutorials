"use strict";
let myName = document.querySelector(".name");
let myAge = document.querySelector(".age");
let myLocation = document.querySelector(".location");
let myList = document.querySelector(".list");

let person = {
    name: "David",
    age: 60,
    location: "Romania",
    major: "Farming",
}
const paragraph = document.body.appendChild(document.createElement("h1"));
console.log(paragraph)
paragraph.append(person.name)
myAge.append(person.age)
myLocation.append(person.location)

console.log(person.age)