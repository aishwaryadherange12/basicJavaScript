//Vriable Declaration
let a = 10
console.log(a) //To Print Value of a
a = 20
console.log(a)
//we can change value of a because let
const b = 50
console.log(b)
console.log("\n")

//error console.log(b) beacuse of const b cant be change

//Function use for repetation of code
//function keyword function name(parameters){blocks
//statements
//}
//functionname(arguments) to call function
//Arithmatic Operations
//+,-,*,/,%
function Calculator(p,q){
    console.log(p+q)
    console.log(p-q)
    console.log(p*q)
    console.log(p/q)
    console.log(p%q)
} 

Calculator(10,5)
console.log("\n")
Calculator(70,3)
// program 1 
// function without parameter and without return type 

function add(){
    console.log(9+9)
}
add()
add()
add()
add()

// program 2
// function with parameter and without return type 

function addA(x,y){
    console.log(x+y)
}
addA(12,14)
addA(12,1)
addA(1,1)

// function with parameter and with return type 
// 100 rs  show
// 100 rs given

// program 3
function addC(x,y){
    return x+y
}
let a1 = addC(12,2)
console.log(a1)
console.log(a1 + 10)
console.log(a1 - 10)
console.log(a1 * 0.10)