// object literals
let student1 = {
    firstName:"aishwarya",
    lastName:"rao",
    age:27,
    skills:["python","javascript","html","css"]
}
let student = {
    firstName:"yashu",
    lastName:"mehta",
    age:23,
    skills:["c++","c","sql"]
}

// student1 (dot notation and bracket notation)
// console.log(student1.firstName)
// student1.firstName = "aish"
// student1.city = "pune"
// delete student1.skills


// console.log(student1['firstName'])
// student1['firstName'] = "aish"
// student1['city'] = "pune"
// delete student1['skills']
//object literal
//Object Creation Template 

//1.function constructor
//2.ES6 class
//3.object.create() 

//1. function constructor
function Person(fn,ln,ag,sks){
    this.firstName = fn //aish.firstName = aish
    this.lastName = ln
    this.age = ag
    this.skills = sks
}

let aish = new Person("aish","D",24,["python","java","javascript"])
let vaish = new Person("vaish","L",23,["html","css"])
console.log(aish)
aish.city = "sangamner"
//update
aish.skills.push("html") 
console.log(aish)

//2. Es6 class
class Person2 {
    constructor(fn,ln,ag,sks){
        this.firstName = fn
        this.lastName = ln
        this.age = ag 
        this.skills = sks
    }
}
let yashu = new Person2("yashu","mehta",22,["java","js","C","C++"])
console.log(yashu)
yashu.city = 'kalyan'
for(let i in yashu){
    console.log(yashu[i])
}
console.log("-------------------------------------------------------------")
//3. object.create method
//no use
// let ad = Object.create({})
// ad.fn = "aish"
// ad.ln = "D"
// ad.age = 23
// ad.city = "sangamner"
// console.log(ad)
let obj = {
    init:function(fn,ln,age,skills){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.skills = skills
    }
}

let patu = Object.create(obj)
patu.init("patu","K",24,["py","js"])
console.log(patu)