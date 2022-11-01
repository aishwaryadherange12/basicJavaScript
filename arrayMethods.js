// map(), filter(), reduce(), forEach()
// some(), every() , find(), findIndex()

let numbers = [11,22,33,44]
// [13,24,35,46]

// map()
numbers.map(function(el,index,arr){
    console.log(el,index,arr)
})
let q15 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q15)

// let tables  = [1,2,3,4,5,6,7,8,9,10] 
// // [2,4,6,8,10,12,14,16,18,20]
// let q16 = tables.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return el * 3
// })
// console.log(q16)


// filter()
let marks = [44,55,66,22,33,44,55,66,77]
// return me marks greater than 50
// [55,66,55,55,66,77]
// let q17 = marks.filter(function(el,index,arr){
//     return el > 50
// })
// console.log(q17)

// let names2 = ["amol","amit","abhay","ram","sham"]
// // ["amol","amit","sham"]
// let q18 = names2.filter(function(el,index,arr){
//     return el.length == 4
// })
// console.log(q18)



// marks.filter(function(el,index,arr){
//     if(index > 2){
//         return el > 50
//     }
// })