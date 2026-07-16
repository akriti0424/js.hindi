const name = "Akriti"
const repoCount = 50


// console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ("Playway-hc-com")
console.log(gameName)
console.log(gameName[3])

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4))
console.log(gameName.indexOf("a"))


console.table([gameName,repoCount,name])


const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-7,3);
console.log(anotherString)


const newStringOne = "             Akriti        "
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://akriti.com/akriti%20sharma"
console.log(url.replace('%20',"-"))


console.log(url.includes('akriti'))
console.log(url.includes('sundar'));

console.log(gameName.split("-"))