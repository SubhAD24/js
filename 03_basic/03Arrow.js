 const user = {
    userName : "Subbhra",
    Price : 999,

    WelcomeMessage : function() {
         console.log(`${this.userName}, Welcome to website`);
         console.log(this);
         
    }
 }

//  user.WelcomeMessage()
//  user.userName = "ram"
//  user.WelcomeMessage()

const arrow = () =>{
    let userName = "subhra"
    console.log(this.userName);
    
}
//arrow()

//  const addTwo = (num1,num2) => {
//     return num1+num2
//  }

//  const addTwo = (num1,num2) => num1+num2
   
// const addTwo = (num1,num2) => (num1+num2)
 
const addTwo = (num1,num2) => ({userName:"Subhra"})

 console.log(addTwo(10,20));
 