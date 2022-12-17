//slice
//splice
//flat
//at
//fill

//1.slice => Return array 
//slice(startIndex,endIndex(not inclusive))
//              0      1      2        3      4  
let names = ["aish","vaish","pooja","patu","yashu"]
//             -5     -4     -3       -2       -1
let c1 = names.slice(0)
console.log("Slice Names=>",c1)     //Names=> [ 'aish', 'vaish', 'pooja', 'patu', 'yashu' ]

let c2 = names.slice(2,4)
console.log("Slice Names=>", c2)    //Names=> [ 'pooja', 'patu' ]

let c3 = names.slice(-4,-1)
console.log("Slice Names=>",c3)     //Names=> [ 'vaish', 'pooja', 'patu' ]

let c4 =names.slice(-1,-4)
console.log("Slice Names=>",c4)     //Names=> []


//2.splice => Return Array
//splice(startIndex,noOfElementsToRemove) or
//splice(startIndex,noOfElementsToRemove,replaceElements)
let fruits = ["banana", "apple", "cherry", "kiwi", "strawberry"]
let a1 = fruits.splice(0)  //remove all fruits from array
console.log(a1)            //[ 'banana', 'apple', 'cherry', 'kiwi', 'strawberry' ]
console.log(fruits)        //[]

fruits = ["banana", "apple", "cherry", "kiwi", "strawberry"]
let a2 = fruits.splice(1,1)//remove apple
console.log(a2)            //[ 'apple' ]
console.log(fruits)        //[ 'banana', 'cherry', 'kiwi', 'strawberry' ]

fruits = ["banana", "apple", "cherry", "kiwi", "strawberry"]
let a3 = fruits.splice(2,2)//remove cherry, kiwi
console.log(a3)            //[ 'cherry', 'kiwi' ]
console.log(fruits)        //[ 'banana', 'apple', 'strawberry' ]

fruits = ["banana", "apple", "cherry", "kiwi", "strawberry"]
let a4 = fruits.splice(0,2,"pinapple","papaya")//replace banana and apple to pinapple and papaya
console.log(a4)            //[ 'banana', 'apple' ]
console.log(fruits)        //[ 'pinapple', 'papaya', 'cherry', 'kiwi', 'strawberry' ]

//3.flat return one combine array 
//             0         1         2
//          0  1  2    0   1  2   0   1  2
let arr = [[11,22,33],[44,55,66],[77,88,99]]
console.log(arr[0][0]) // 11
console.log(arr[1][1])// 55
console.log(arr[2][2])// 99

let a5 = arr.flat()
console.log(a5) //[ 11, 22, 33, 44, 55, 66, 77, 88, 99]

//4.at => return element from index
let arr2 = [11,22,33,44]
let a6 = arr2.at(2)
console.log(a6)//33

//5.fill => fill or add element at given positions and return array
//fill(value, startIndex, EndIndex(not inclusive))
//          0   1  2  3  4  5  6
let arr3 = [11,22,33,44,55,66,77]
let a7 = arr3.fill(999,1,4) 
console.log(a7)//[11, 999, 999, 999, 55,  66,  77]