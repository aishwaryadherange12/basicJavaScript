//human
//property => height, weight,color
//Methods => talk(), walk()

// let city='nashik'//string
// console.log(typeof city)
// let num="10" //string
// console.log(typeof num)

// //property =>length
// // let state='Gujrath'

// // // G u j r a t h
// // // 0 1 2 3 4 5 6

// // //length => starts with 1
// // console.log(state.length) //7

// //methods
let state='Gujrath'
// //1. toUpperCase() Convert every character into Upeer case
//let a=state.toUpperCase()
// console.log(a) //GUJRATH
// console.log(typeof a)

// //2. toLowerCase()
let b=state.toLowerCase()
console.log(b) //gujrath
console.log(typeof b) //string

// //3. indexOf(char) //return type => number
let c=state.indexOf('r')
console.log(c)

let d=state.indexOf('g')
console.log(d) //-1

// //4. includes() //returns boolean
let e=state.includes('G')
console.log(e)

let f=state.includes('rat')
console.log(f)

let g=state.includes('T')
console.log(g)

//5. startsWith()
let state1='Maharashtra'
let a1=state.startsWith('M')
console.log(a1)

// //6. endsWith()
let b5=state.endsWith('trA')
console.log(b5)

// //7. trim() 
let city=' nashik '
console.log(city.length)
let a2=city.trim()
console.log(a2)
console.log(a2.length) //6

//8. trimStart()
console.log(city.length)
let d1=city.trimStart()
console.log(d1)
console.log(d1.length)

//9. trimEnd() 
console.log(city.length)
let e1=city.trimEnd()
console.log(e1)
console.log(e1.length)

//10. slice()

let firstName="Aishwarya"
// //-9-8-7-6 -5-4-3-2-1
// // A i s h w a r y a
// // 0 1 2 3 4 5 6 7 8 
//firstName.slice(startposition,endposition)
//endposition (optional)
//prevision index of endposition
//left right

let a12=firstName.slice(2,5) 
console.log(a12)

let a13=firstName.slice(3) 
console.log(a13)

let a14=firstName.slice(4,0)
console.log(a14) //blank

let a15=firstName.slice(-5,-1)
console.log(a15)
// let firstName="Aishwarya"
// //-9-8-7-6 -5-4-3-2-1
// // A i s h w a r y a
// // 0 1 2 3 4 5 6 7 8 
let a17=firstName.slice(-4,5)
console.log(a17) 

let a19=firstName.slice(5,-6)
console.log(a19)

let a20=firstName.slice(1,2)
console.log(a20)

//11. replace()
let str='I learn javascript, javascript is simple lang'
let b1=str.replace('javascript','python')
console.log(b1)

//12. replaceAll()
let str1='I learn javascript, javascript is simple lang'
let b2=str1.replaceAll('javascript','python')
console.log(b2)

//13. charAt()
let lastName='dherange'

// // d h e r a n g e
// // 0 1 2 3 4 5 6 7
let c1=lastName.charAt(5)
console.log(c1) //n

//14. charCodeAt()
let c12=lastName.charCodeAt(2)
console.log(c12)

// toUpperCase()
// toLowerCase()
// startsWith()
// endsWith()
// includes()
// trim()
// trimEnd()
// trimStart()
// indexOf()
// charAt()
// slice()
//replace()
//replaceAll()
//charAt
//charCodeAt