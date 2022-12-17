//Lexical scope and closure

// let human = {
//     firstName: "Aishwarya",
//     lastName: "Dhearnge",
//     age: 23,
//     display: function () {
//         console.log(firstName)
//     }
// }
// human.display() //error


//Program 2
let human = {
    firstName: "Aishwarya",
    lastName: "Dhearnge",
    age: 23,
    display: function () {
        console.log(this.firstName)
    }
}
human.display()  //Aishwarya
