 class user{
    constructor(userNmae){
        this.userNmae = userNmae
    }

    logMe(){
        console.log(`userNmae is ${this.userNmae}`);
    }
 }

 class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new cousre was added by ${this.userNmae}`);
        
    }
 }

 const chai = new teacher("chai","chaio@123.com","456")

 chai.logMe()
 console.log(chai);
 

 const masalaChai = new user("masalaChai")
 masalaChai.logMe()

 console.log(chai instanceof user);
 