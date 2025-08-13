function setUsername(username){
    this.username = username
console.log(`called`);

}

function createUser(username, email, password){
    setUsername.call(this,username)
    // this.username = username
    this.email = email
    this.password = password
}

const js = new createUser("js", "js@meta.com", "345")
console.log(js);
