const user = {
    username: "Subhra",
    Logincount: 8,
    SignIn : true,

    getUserDetails: function(){
    // console.log("get details form database");
   // console.log(`username: ${this.username}`);
    c//onsole.log(this);
    
    
}
}

//console.log(user.username);
// console.log(user.getUserDetails());
 


 
    function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.gretting = function(){
        console.log(`Welcome${this.userName}`);
        
    }
    return this
}

const userOne = new User("Subhra", 10, true);
console.log(userOne);
const userTwo = new User ("Adhikary", 12, false)
console.log(userTwo);


 