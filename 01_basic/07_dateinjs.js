// DATES

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


//let myCreatedDate = new Date(2024,9,24)
//let myCreatedDate = new Date(2024,9,24,5,8)
let myCreatedDate = new Date("07-12-2005")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long",
})



