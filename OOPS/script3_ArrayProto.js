let names = ["aish","vaish","yashu","ash"]
console.log(names)

console.log(names.length)
console.log(names.sort())
//==>length property
//==>23 Methods, all sort, push ,pop methods are created in Array() Class 
//Array Class =>Parent, names2 =>Child 
let names2 =  new Array(6)
names2[0] = "vaish"
names2[1] = "yashu"
names2[2] = "ash"
names2[3] = "aish"
console.log(names2)

console.log(names2 instanceof Array)
console.log(names instanceof Array)

console.log(names2.__proto__ == Array.prototype)
console.log(names.__proto__ == Array.prototype)

console.log(names)

//length prperty gives automatically to each object
console.log(names.hasOwnProperty('length')) //true

//console.log(Person)
//console.log(aish2)
str = "hello"
console.log(str.__proto__==Array.prototype) //false

console.log(str.__proto__==String.prototype) //true

// inbuilt ==> We add PrintName Method in Array Class But This is not good to add methods in Array Class 
Array.prototype.PrintName = function(){
    console.log('Aishwarya')
}
names.PrintName()
names2.PrintName()