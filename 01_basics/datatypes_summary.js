//primitive 

// 7 types: string, numer, boolean, null, undefined, symbol


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 35877990009887766655n
//referenced type also called non-primitive

//Arrays, objects, functions

const heroes = ["akriti", "pratik"]

let myObj = {
    name:"akriti",
    age: 23,
}

const myFunction = function(){
    console.log("hello world");
}






// **************************************************

//stack(primitive), Heap(non_primitive)

let myYoutubeName = "akriti"
let anotherName = myYoutubeName

anotherName = "pratik"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "adjid.com",
    upi:"user@ypl"
}
let userTwo = userOne
userOne.email = "hitges.gmail.vom"

console.log(userOne.email)
console.log(userTwo.email)