const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc${acc} currval${currval}`);
    
//     return acc + currval
// }, 0) 

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "Wrong shirt",
        price: 999
    },
    {
        itemName: "Roadstar shirt",
        price: 1899
    },
    {
        itemName: "Snitch shirt",
        price: 1599
    },
    {
        itemName: "Allen solley shirt",
        price: 1299
    },
    {
        itemName: "puma shirt",
        price: 1999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(`Your total bill was: ${priceToPay}`);
