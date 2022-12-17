//Object  literal
// let aish = {
//     firstName:"aish",
//     lastName:"D",
//     age:23,
//     rollNo:11,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let vaish = {
//     firstName:"vaish",
//     lastName:"L",
//     age:21,
//     rollNo:43,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// expression
// declaration
// arrow
//1.function constructor 
function Person(firstName,lastName,age,rollNo){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age 
    this.rollNo = rollNo
    // this.displayName = function(){  //function expression
    //     console.log(this.firstName + this.lastName)
    // 
    //}
}

let aish = new Person("aish","D",23,11)
let vaish = new Person("vaish","L",22,58)
//  
// console.log(aish)
// console.log(vaish)

console.log(aish instanceof Person)
console.log(vaish instanceof Person)

// Every object will have _proto_ == Parent.vaishpe
console.log(aish.__proto__ === Person.prototype)
console.log(vaish.__proto__ === Person.proto)
console.log(aish)
console.log(vaish)
// aish.displayName()
// vaish.displayName()

Person.prototype.displayName = function(){
    console.log(this.firstName +" "+ this.lastName)
}
aish.displayName()
vaish.displayName()