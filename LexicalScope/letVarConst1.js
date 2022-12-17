//Difference Between let, var, const
//let and const having block scope
//Var dont have block scope
//var having function scope
//var can be redeclare, let and const cant let a=10 ,let a=20
let a = 5
console.log(a) //5
a = 15 
console.log(a) //15

const b= 20
console.log(b) //20
//b = 50
//console.log(b) //Error- Assignment to constant variable.

//Let and Constant has block scope

//Program 1
    // {
    //     let c = 20
    //     console.log(c) //20
    // }
    // console.log(c) //error c cant access outside the block

//Program 2    
let d = 50
    {
        let d = 20
        console.log(d) //20
    }
console.log(d) //20 //50 ==>First find locally and then globally

//Program 3
let e = 70
    {
        console.log(e)
        e = 80
        console.log(d) 
    }
console.log(e) //80 ==>First find locally not found and then find globally and then update e

//Program 4
// {
//     const f = 500
// }
//console.log(f) //Error-f is not defined

// Program 5
const g = 90
{
    const g = 110
    console.log(g) 
}
console.log(g) //110 90 ==>First find locally and then globally

//Program 6
const h = 120
{
    console.log(h) //600
//    h = 140 //Error
    console.log(h)
}
console.log(h)//120 and then error //First find locally not found , found globally but const cant be update   

//--------------VAR----------

// Program 7
{
    var i = 150
}
console.log(i) //150

//Program 8
var j = 160 
function add() {
    var j = 170 
    console.log(j) //170
}

console.log(j) //160 // First find glbally then in function
add() //170
console.log(j)//160

//program 9
function addD() {
    var k = 200
    console.log(k) //999
}
addD() //200 First check globally then in function 
console.log(k) //Error-var cannot be access outside the function block 

//let => reassign possible
// let a1 = 200 //300
// a1 = 300  //update
// console.log(a1)  //300

// console.log(a1) //300

//const => reassign is not possoble
// const y1=888
// console.log(y1) //888
// y1=444 //update
// console.log(y1) //error

//var => reassign is possible
// var w1=30
// console.log(w1) //30
// w1=500
// console.log(w1) //500


//let => redeclaration is not possible
// let a=20
// let a=30
// console.log(a)

//const => redeclaration is not possible
// const y2=100
// const y2=700
// console.log(y2)

//var =>redeclaration is possible
// var m1=100
// var m1=900
// console.log(m1) //900