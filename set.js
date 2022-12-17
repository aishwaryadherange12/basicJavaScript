//DATA TYPES ==> Object, SET, MAP
//why SET => it store unique values
//why MAP => we can store different data types as a key of map
//in object all keys explicitely converted into STRING datatype 

//SET
//property==> size
//SET methods==> add(),has(),clear(),delete(),foreach()

//set does not store by index
let setA = new Set()
console.log(setA) //Set(0) {}
//unique value
//set,map,object does not store value with index
//property
//method

//1. add() => method
setA.add('Aishwarya')
setA.add('Aishwarya')//didnt add duplicate value
console.log(setA)//Set(1) { 'Aishwarya' }
setA.add('yash')
console.log(setA)//Set(2) { 'Aishwarya', 'yash' }
//or
let setZ = new Set(['a','b','c','d'])
console.log(setZ) // Set(4) { 'a', 'b', 'c', 'd' }
console.log(setZ[0])//undefined

let setB = new Set("Aishwarya")
console.log(setB)//Set(8) { 'A', 'i', 's', 'h', 'w', 'a', 'r', 'y' }

//size => property
let a1 = "pune"
let setC = new Set(a1)
console.log(setC)//Set(4) { 'p', 'u', 'n', 'e' }
let a2 = setC.size
console.log(a2)//4

let setD = new Set(['Aishwarya', 'yashu', 'patu', 'vaish'])
console.log(setD) //Set(4) { 'Aishwarya', 'yashu', 'patu', 'vaish' } 
console.log(setD.size) //4
//add(),has(),clear(),delete(),forEach()
//1. add()

// let setE = new Set()
// setE.add('dk')
// console.log(setE)

//2.has()==>return boolean value
let setE = new Set(['Aishwarya', 'yashu', 'patu', 'vaish'])
let s1 = setE.has('Yashu') //false y should be small
console.log(s1)
console.log(setE.has('Aishwarya')) //true

//3. delete() ==>return boolean value
let setF = new Set(['Aishwarya', 'yashu', 'patu', 'vaish'])
console.log(setF.size)
let s2=setF.delete('patu')
console.log(s2) //true
console.log(setF)

//4. clear() ==>does not return annything
let setG = new Set(['Aishwarya', 'yashu', 'patu', 'vaish'])
let s3 = setG.clear()
// console.log(s3) //undefined
console.log(setG)//Set(0) {}

//5.forEach()
let a11 = new Set(['Aishwarya', 'yashu', 'patu', 'vaish'])

a11.forEach(function(el){
    console.log(el)
})

let a12 = new Set(['Aishwarya', 'yashu', 'patu', 'vaish'])
for(let val of a12){
    console.log(val)
}


//===================================================================


// let student2 = ['Aishwarya', 'yashu', 'patu', 'vaish']
// for (let i = 0; i < student2.length; i++) {
//     console.log(student2[i])
// }

// let student3 = {
//     firstName: "aish",
//     lastName: "d",
//     age: 24,
//     skill: "java"
// }
// for (let key in student3) {
//     console.log(key, student3[key])
// }