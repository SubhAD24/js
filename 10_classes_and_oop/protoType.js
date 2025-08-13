let myName = "Subhra    "

// console.log(myName.truelength);


let myHeros = ["Thor", "SpiderMan"]

let heroPower = {
    Thor: "hammer",
    SpiderMan: "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.SpiderMan}`);
        
    }

}

Object.prototype.subhra = function(){
    console.log(`subhra is present in all object`);
    
}

heroPower.subhra()

let anotherUsername = "jsjavascript"

String.prototype.trueLength = function(){
    console.log(`true length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()