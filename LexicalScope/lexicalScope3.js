//Program 6
// closure

function add1() {
    let a = 8
    let b = 10
    return a + b
    console.log('hello')
    console.log(a+b)

}
// let a = add1()
// console.log(a) //18

function add1() {
    let a = 10
    let b = 20
    console.log("hi aishwarya")
    return function () {
        console.log(a + b)
        console.log('hello')
    }
}
let a=add1()
console.log(a)
a()