// Immediately Invoke Function Expressions (IIFE)


(function chai (){
    //named IIFE
    console.log(`DB CONNECTED`);
}) ();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Subhra")