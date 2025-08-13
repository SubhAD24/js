class user{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`userName ${this.userName}`);
        
    }

    static createID(){
        return `123`
    }
}

const subhra = new user("subhra")
//console.log(subhra.createID());


class teacher extends user{
    constructor(userName,email){
        super(userName)
        this.email = email
    }
}

const js = new teacher("chai", "chai@google.com")
js.logMe()
//console.log(js.createID());
// console.log(teacher.createID()); // works
// console.log(user.createID());    // also works


