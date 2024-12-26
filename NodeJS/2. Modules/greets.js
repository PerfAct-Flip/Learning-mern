function greet(username) {
    console.log("hello", username);
}

// Tell other file you can use this same function.
module.exports = greet;
//greet can be used by other files now.