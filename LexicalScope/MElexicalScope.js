//Program 1
function addA(a,b){
    console.log(a+b)
    return a+b
    //After Return Statement any code did not execute withinn blocks 
    console.log(a+b) //no output
    console.log('Hello')//no output
}

//Program 2

function AddB(){
    let x = 50
    let y = 100
    console.log(x+y)
    return function(){
        return x+y
    }
}

let a = AddB() //150
console.log(a) //[Function (anonymous)]


//Program 3

function AddB(){
    let p = 200
    let q = 500
    //console.log(p+q)
    return function a(){
        //After Return function next statement did not execute after block but variables can be accessible p,q
        console.log(p+q)
    }
    console.log("HELLO") //No Output
}

AddB()//[Function: a]
let z = AddB()
console.log(z) //[Function: a]
a() //700
z() //700