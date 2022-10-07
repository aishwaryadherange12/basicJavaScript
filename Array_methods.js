//Array
//Push() ==>add the element at last of array return length
//Unshift()==>add the element at first of array return length
//pop() ==> removed element from last return removed element
//Shift() ==>remove the element from first return removed element
//includes()==> search for element return boolean
//indexOf()==>search for element return number if not found return -1 
//reverse()==>reverse array return reversed array
//join()==> join elements in array 
//sort()==> sort element in array

let fruits=["mango",'apple','grapes']
// console.log(fruits.length) //3
// //1. push()
// //action => add the element at last of array
// //return => new length
console.log(fruits)
let a=fruits.push("papaya")
console.log(a)
console.log(fruits)

//2. unshift()
//action =>add the elemnet at first
//return =>new length
let b=fruits.unshift("cherry")
console.log(b) //4
console.log(fruits)

//3. pop()
//action => removed the last element from array
//return => return removed element

let marks=[20,33,40,50,99]
let a1=marks.pop()
console.log(a1) //99
console.log(marks) //[20,33,40,50]

//4. shift()
//action=> remove the element from first
//return => removed element
let result=marks.shift()
console.log(result) //20
console.log(marks)

// 5.includes()==> search for element return boolean
numbers2 = [33,4,55]
let q7 = numbers2.includes(45)
console.log(q7)

// 6.indexOf()==>search for element return number if not found return -1 
//          0  1  2
numbers3 = [33,4,55]
let q8= numbers3.indexOf(4)
let q9 = numbers3.indexOf(45)
console.log(q8)
console.log(q9)

// 7.reverse()==>reverse array return reversed array
let cities = ["pune","nagpur","banglore","chennai"]
let q10 = cities.reverse()
console.log(q10)

//8.join()==> join elements in array 
let a10=[1,2,3]
let g = a10.join("@") 
console.log(g) //1@2@3

//9.sort()==> sort element in array
let names = ['vish','ashwini','pooja','aish']
let sortNames = names.sort()
console.log(sortNames)//aish, ashwini, pooja, vaish