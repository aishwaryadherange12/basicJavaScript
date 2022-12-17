//Var having function scope
//let and const having block scope
//ReDeclaration ==> let,const cant redeclarate but var can be redeclare and it gives updated values

//let can uodate or reassign
let a = 100
{
    let a = 200
    console.log(a)
}

console.log(a) //First Find locally and then find globally //200 and then 100

let b = 500
{   
    console.log(b) //500
    b = 1000
    console.log(b) //1000
}

console.log(b) //n //200 and then 100

const p = 600
{
    console.log(p)
    p =999
    console.log(p)
}
console.log(p)

{
    var x = 555
    //console.log(a)
}
console.log(x)
var num = 100
function add(){
    let num = 200
    console.log(num)
}

console.log(num)
add()

console.log(num)

var q = 50
var q = 100
console.log(a)