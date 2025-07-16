// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    //console.log(element);   
}

for (let i = 0; i <= 10; i++) {
   // console.log(`outer value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        //console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}



let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(element);
}


/// break and continue

// for (let i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i === 15) {
//         console.log(`deceted${i}`);
        
//         break
//     } 
// }
    


for (let i = 0; i <= 20; i++) {
    console.log(i);
    if (i === 15) {
        console.log(`deceted${i}`);
        continue
    } 
}
    