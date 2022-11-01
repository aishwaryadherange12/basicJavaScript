//method of array
// map(), filter(), reduce(), forEach()
// some(), every() , find(), findIndex()

//1.map() => 
//action =>perform action with each element eg.add,sub
//return =>return new array
let numbers = [11,22,33,44]
//1st Type
numbers.map(function(el,index,arr){
    console.log(el,index,arr) 
})
//op
// 11 0 [ 11, 22, 33, 44 ]
// 22 1 [ 11, 22, 33, 44 ]
// 33 2 [ 11, 22, 33, 44 ]
// 44 3 [ 11, 22, 33, 44 ]

//2nd type
let res = numbers.map(function(el,index,arr){
   if(index >= 0){
   return el+2 
   }
})
console.log("Add 2 in Each Element",res) // [13,24,35,46]

let tables  = [1,2,3,4,5,6,7,8,9,10] 
// [2,4,6,8,10,12,14,16,18,20]
let res1 = tables.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el * 3 //[  3,  6,  9, 12, 15,18, 21, 24, 27, 30]
})
console.log(res1)

//2.filter()
//action => filter the  array elements
//return => new filter array
let marks = [44,55,66,22,33,44,55,66,77]
// return me marks greater than 50

let res2 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log("Filter Marks=> ",res2)// [55,66,55,55,66,77]

//print element which has length 4
let names2 = ["aish","vaish","pooja","patu"]
let res3 = names2.filter(function(el,index,arr){
    return el.length == 4
})
console.log("Filter Name=> ",res3)//[ 'aish', 'patu' ] 

//3. reduce()
//action=> perform action in array element in sequence 
//return => value or result
//add each all elements 
let digits= [1,2,3,4]
let q3 = digits.reduce(function(acc,el,index,arr){
    return acc+ el
},0)

console.log("Addition of array elements=> ",q3)//10

//4. forEach() ==> Display Data in array
//does not return - undefined

let names = ["aish","vaish","pooja","patu"]
console.log("Names=>")
names.forEach(function(el,index,arr) { 
    console.log(el)
});
//  aish
// vaish
// pooja
// patu

//5.some() =>  return => Boolean Value 
//return true if one or multiple value true
let num1=[2,3,4,5,6,7,8,9]
let a1=num1.some(function(el,index,arr){
    return el>5
})
console.log("some() Example=> ",a1)//true

//6.every() =>  return => Boolean Value 
//return true if all value true
let num2=[10,20,30,40]
let a2=num2.every(function(el,index,arr){
    return el>20
})
console.log("every() Example=> ",a2)//false

//7.find() => return first occurance after condition is true
let num3=[1,2,3,4,5,7,0,8,5]
let a3=num3.find(function(el,index,arr){
    return el>5
})
console.log("Find First >5 => ",a3)//7

//8.findIndex() => return first occurance element index in array after condition is true
let num4=[12,33,4,30,65,6,30]
let a4=num4.findIndex(function(el,index,arr){
    return el==30
})
console.log("Find 30 Index=> ",a4) //3