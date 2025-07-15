// singleton


// object literals
//Object.create

const mySym = Symbol("Key1")

const jsUser = {
    name: "Subhra",
    [mySym] : "myKey1", // symbol is only work when its define usnig []
    age: 20,
    location: "bangalore",
    email: "s123@com",
    isLoggedIn: false,
    LastLoggedIn: ["MOnday","Sunday"]
}

// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "subhra@google.com" // to change any value 
// Object.freeze(jsUser) // to freeze object that does not allow changes 
// jsUser.email = "subhra@xyxz.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js users");
}
jsUser.greeting2 = function(){
    console.log(`Hello js users my name is  ${this.name} my age is ${this.age} my location is ${this.location}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());



