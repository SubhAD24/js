class User {
    constructor(userName, email, password){
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}bcdf`
    }

    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }
}

const js = new User("js","js@googler.com", "123")
console.log(js.encryptPassword());
console.log(js.changeUsername());

