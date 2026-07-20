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


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Akriti"))
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());



function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

// const user = {
//     username :"Akriti",
//     price:199
// }
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username:"akriti",
    price:399
})

const newArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,400,500,1000]))