const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls, Cryptography, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "js", email: "js@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "subh24", password: "345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }) 
  .finally(() => console.log("Promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"i love js", password: " 567"})
    } else{
        reject('ERROR: JS went wrong')
    }
}, 1000)
})

async function consumePromiseFive(){
   try {
    const response =  await promiseFive
   console.log(response);
   } catch (error) {
    console.log(error);
    
   }
   
}
consumePromiseFive()

// async function getAllUsers(){
// try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await response.json()
// console.log(data);
// } catch (error) {
//     console.log("E:", error);
    
// }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
} )
.then((dats) => {
    console.log(data);
    
})
.catch((error) => console.log(error))
