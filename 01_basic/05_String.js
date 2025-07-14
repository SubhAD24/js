const name = "Subhra"
const age = 20

//console.log(name + age + "value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('Git-hub-com')
// console.log(gameName[0]);
// console.log(gameName._proto_);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t')); 

const newString = gameName.substring(0,4)
console.log(newString);

const AnotherString = gameName.slice(0, 2)
console.log(AnotherString);

const NewStringOne = "     Subhra    "
console.log(NewStringOne);
console.log(NewStringOne.trim());

const url = "https://subhra.com/subhra%20adhikary"

console.log(url.replace('%20', '-'));
console.log(url.includes('git'));

console.log(gameName.split('-'));



