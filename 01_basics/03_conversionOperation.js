let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null = 0;
// undefine => NaN;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "akriti" => true


let somwNumber = 33

let stringNumber = String(somwNumber)
console.log(stringNumber);
console.log(typeof(stringNumber))