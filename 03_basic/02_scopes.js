let a = 300

if(true) {
    let a = 10
    const b = 20
    //console.log("INNER: ",a);
    
}

// console.log(a);


function one(){
    const username ="subhra"

    function two(){
        const website = "Youtube"
        console.log(username);   
    }
    //console.log(website);
    
    two()
}

//one()

if(true){
    const username = "Subhra"
    if(username === "Subhra"){
        const website = "Youtubr"
        //console.log(username+website);
    }
    //console.log(website);
}

//console.log(username);



/////// ++++++++++++++++++ Interesting +++++++++


function addone(num){
    return num+1
}

console.log(addone(5));


const addTwo = function(num){
    return num+2
}

console.log(addTwo(5));
