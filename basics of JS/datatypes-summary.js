// //primitive 

// // 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null //(typeof value of null is object)
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 232452346376n //(not used much)



//Reference Type (Non Primitive)

// Array, Objects, functions (type of value of non primitives are object)

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "shubham",
    age: 26,
}

const myFunction = function(){
    console.log("hello World");
}



// ++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-Primitive)

let myYoutubename = "Shubhamyadavdotcom"

let anothername = myYoutubename
anothername = "chaiaursutta"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    age: "26"
}

let userTwo = userOne

userTwo.email = "shubham@google.com"

console.log(userOne.email);
console.log(userTwo.email);