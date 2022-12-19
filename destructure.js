//destructure
//----------------
//To reduce line of code
//the object which store multiple value apply destructuring 

//1. with array
let marks = [40,50,60,70]
let [a, b, c, d] = marks
console.log(a,b,c,d) //40 50 60 70

let names= ['aish','patu','vaish','yashu']
let [n1, n2, n3, n4, n5] = names
console.log(n1) //aish
console.log(n5) //undefined

//2. Nested Array
let numbers = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
let [[a1,a2,a3],[a4,a5,a6],[a7,a8,a9]] = numbers
console.log(a1)//11
console.log(a9)//99

//3. With object
let person = {
    fName :'aish',
    lName : 'dherange',
    age: 24,
    skills : ['js','java','html','python']
}
//since object is not stored with index we can change sequence of keys
let {fName,lname,skills,age} = person
console.log(fName) //aish

//4.alise ==>we can give custome name
let vehical = {
    color: "black",
    company : "tata",
    model : "nano" 
}

let {color:c1,company:comp,model:m1} = vehical

//5.Object Within Object
console.log(c1,comp,m1)//black tata nano
let animal = {
    legs : 4,
    dog : {
        name : "jully",
        type : "labrador", 
        bark : true,
        herbivorous : false 
    }          
}

let {legs, dog:{name,type,bark,herbivorous}} = animal
console.log(legs)//4
//console.log(dog)// when we only give object{ name: 'jully', type: 'labrador', bark: true, herbivorous: false }
console.log(name) //jully
console.log(type) //labrador

//6. Object in array
let employee  = [
    {
        empName : 'aish',
        e_age:24,
        city:"sangamner",
        
    },
    {
        country : "INDIA"   
    }]

let [{empName,e_age, city},{country}] = employee
console.log(empName) //aish
console.log(age) //24
console.log(country) //INDIA

//7. Array inside object

let student = {
    firstName: "aishwarya",
    rollnumber: 11,
    skills: ['js', 'java', 'python']
}
let { firstName: fN, rollnumber: rn, skills: [s1, s2, s3] } = student
console.log(fN) //aishwarya
console.log(s1) //js