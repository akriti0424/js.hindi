//singleton 

//object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Akriti",
    
    age: 24,
    location: 'Bhopal',
    email:"akritisharma@gmail.com",
    isLoggesIn: false,
    lastLoginDays: ["Monday","Saturday"]
}


// console.log(jsUser.email)
// console.log(jsUser["email"])
// myArray = ['a','i']
// myArray[1]
// myArray[2]

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

