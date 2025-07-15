// const tinderuswer = new Object()

const tinderUser = {}

 tinderUser.id = "123bca"
 tinderUser.name = " ram" 
 tinderUser.isLoggedIn = false

 //console.log(tinderUser);

 const regularUser = {
    email: "Subhara@132.com",
    fullName :{
      UserFullName : {
        firstName: " subhra",
        lastname: "Adhikary"
      }
    }
 }
 
 // console.log(regularUser.fullName.UserFullName);
 
  const obj1 = {1: "A", 2: "B"}
  const obj2 = {3: "C", 4:"D"}
//  const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2 }
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 

const Course = {
    CourseName: "JS for full stack",
    price : "1000",
    CourseInstructor: " YouTube"
}

const {CourseName: name} = Course // this is called destructuring
console.log(name);

 