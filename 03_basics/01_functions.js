function sayMyName(){
    console.log("A")
    console.log("k")
    console.log("r")
    console.log("i")
    console.log("t")
    console.log("i")

}
// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")

// addTwoNumbers(3,null)


// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// const result = addTwoNumbers(3,4)
// console.log(result)


function addTwoNumbers(number1, number2){
   let result = number1+number2
    // console.log(result);
    return result
}

// const result = addTwoNumbers(3,4)
// console.log(result);


function loginUserMessage(username){
    return`${username} just logged in`
}

console.log(loginUserMessage("Akriti"))