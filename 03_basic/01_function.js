
function sayMyName(){
console.log("S");
console.log("U");
console.log("B");
console.log("H");
console.log("R");
console.log("A");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1, number2){
    
    let result = number1 + number2
    return result
}

const result = addTwoNumber(3,8)
// console.log("Result: ", result);


function loginUserMessage(username = "xyz"){
    if(username === undefined){
        console.log("please enter a username");
        return
    } 
    return`${username} just logged in`
}

// console.log(loginUserMessage("subhra"));


function calculateCartPrice(...num1){
      return num1
}

// console.log(calculateCartPrice(200,400,800,700));

const user = {
    userName: "Subhra",
    price: 200,

}

function handleObject(anyObject){
console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);

}handleObject({
    userName: "Subhra",
    price: 400
})

const myNewArray = [200,400,500,700]

function returnSecondvalue(getArray){
return getArray[3]
}

//console.log(returnSecondvalue(myNewArray));
 console.log(returnSecondvalue([200,400,500,600,7700]));
 