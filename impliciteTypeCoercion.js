//Implicite Type Coercion
//BODOMAS Rule
//Addition => Number Convert into String if string is at RHS
let a = 3
let b = " hello " 
let c = 3
let d = "2"

console.log(a+b) //3 hello
console.log(b+a) //hello 3
console.log(a+b+c) //3 hello 3
console.log(a+c+b) //6 hello 
console.log(c+d)// 3+"2" = 32 

//Substraction =>String Convert Into Numbers
let e = 5
let f = 5
let g = "1"
let h = "hello"
console.log(e-g) // 5-"1" = 4
console.log(e-h) //Nan




//OR ( || ) operator - If the first value is truthy, then the first value is returned.
// Otherwise, always the second value gets returned.

//AND ( && ) operator - If both the values are truthy, always the second value is returned. 
//If the first value is falsy then the first value is returned or 
//if the second value is falsy then the second value is returned.

var x = 220;
var y = "Hello";
var z = undefined;
        
x || y    // Returns 220 since the first value is truthy
        
x || z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}