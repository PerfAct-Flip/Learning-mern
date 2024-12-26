// this will allow us to use greet function from greet.js
//Getting that function right here.
const greet = require("./greets");
const { person1, person2, person3} = require("./peoples")
let username = "dazai";

greet(username);
greet(person1);
greet(person2);
greet(person3);