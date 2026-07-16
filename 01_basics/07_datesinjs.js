//Dates


let myDate = new Date()

console.log(myDate);
console.log("           ");


console.log(myDate.toString());
console.log("           ");

console.log(myDate.toDateString());
console.log("           ");

console.log(myDate.toISOString());
console.log("           ");

console.log(myDate.toJSON());
console.log("           ");

console.log(myDate.toLocaleDateString());
console.log("           ");

console.log(myDate.toLocaleString());
console.log("           ");

console.log(myDate.toLocaleTimeString());
console.log("           ");

console.log(typeof myDate);

// let myCreateDate = new Date(2002,3,4);

// let myCreateDate = new Date(2002,3,4,5,3);

let myCreateDate = new Date(2002,3,4);
console.log(myCreateDate.toLocaleString());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time`)


newDate.toDateString('default',{
    weekday: "long",
    
})
