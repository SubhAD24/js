class User{
    constructor(email, pasword){
        this.email = email
        this. pasword = pasword
    }
    get email(){
        return this.email1.toUpperCase()
    }
    set email(value){
        return this.email1 = value
    }
    get pasword(){
       return `${this._pasword}subhra`
    }

    set pasword(value){
        this._pasword = value
    }
}


const subhra = new User("subhra@123.com", "abc")
console.log(subhra.pasword);
console.log(subhra.email);

