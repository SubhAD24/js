const userEmail = "s@13456.com"

if (userEmail) {
    console.log("got user emailk");
    
} else{
    console.log("dont have user email");
    
}

// falsy Value
// false, 0 , -0, BigInt 0n, null, " ", undefine, NaN

// Truthy Value
// "0", 'false', " ", [], {}, function(){},

const arr = []

if (arr.length === 0) {
    console.log("Array is empty");
    
}

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("object is empty");
    
}


// Nullish Coalescing Operator (??) : null undefine

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? undefined ?? 30

console.log(val1);


// Terniary operator
//condition ? trye : false

const icePrice = 100
icePrice <=80 ? console.log("less than 80") : console.log("more than 80");


