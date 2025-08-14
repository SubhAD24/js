const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
const MyMath = Object.create(Math);
MyMath.PI = 4;

console.log(MyMath.PI); // 4
console.log(Math.PI);   // 3.141592653589793


console.log(descriptor);

const cofee = {
    name: "black coffe",
    price: 300,
    isAvailable: true,

    orderCofee: function(){
       console.log("cofee nahi bani");
       
    }
}

console.log(Object.getOwnPropertyDescriptor(cofee,"name"));

Object.defineProperty(cofee, 'name', {
    //Writable: false,
    enumerable: true,
 })

console.log(Object.getOwnPropertyDescriptor(cofee,"name"));

for (let [key, value] of Object.entries(cofee)) {
    if(typeof value !== 'function'){

    console.log(`${key} : ${value}`);

    }
    
}