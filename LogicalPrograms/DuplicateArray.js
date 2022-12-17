//duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
//Solution 1
let a= [1,2,3,4,5]

let b=[]
b.push(a,a)
let c=b.flat()
console.log(c)

//Solution 2

function duplicate(arr) {
  return arr.concat(arr);
}

let result =duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
console.log(result)

// Logic question-

// Prob 1: Remove Duplicate numbers from array of element and find the count of an elements. 
// var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];

// output: [55, 44, 67, 8, 65, 1, 2, 3, 34, 5]
// Count: 10