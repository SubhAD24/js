// generate a random colour

const randomColour = function(){
    const hex = "0123456789ABCDEF"
    let colour = '#'
    for(let i = 0; i< 6; i++){
     colour += hex[Math.floor(Math.random()*16)]
    }
    return colour;
};
let intervalId
const startChnagingColor = function(){
 if(! intervalId){
    intervalId = setInterval(changeBgColor,1000);
 }

   function changeBgColor(){
     document.body.style.backgroundColor = randomColour();
   }
}

document.querySelector('#start').addEventListener('click', startChnagingColor )

const stopChnagingColor = function(){
clearInterval(intervalId);
intervalId = null;
}

document.querySelector('#stop').addEventListener('click', stopChnagingColor)