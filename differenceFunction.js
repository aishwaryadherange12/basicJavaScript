//Actual difference between arraow function and function expression

//function declartion
function add() {
    console.log('hello')
}

//function expression
let greet = function () {
    console.log('Welcome')
}
greet()
//----------------no function keyword and ==> ---------------------
//arrow function
let displayName = () => {
    console.log('Aishwarya')
}
displayName()