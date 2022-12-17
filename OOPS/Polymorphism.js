//We cannot achieve polymorphism in javascript, but we can use a logic
//Polumorphism==>Polymorphism means "many forms", 
//and it occurs when we have many classes that are related to each other by inheritance.
//1. Function Overloading=> Same Class,Same Method, Different Signatures(Diff No. Of Parameters)

//2. Function Overloading=> Different Class,Same Method, Same Signatures(Same Parameters)

//1.Function Overloading
//Program 1
class Calculator{
    calc(x,y){
        console.log(`x=${x}, y=${y} Sum==>${x+y}`)
    }
    calc(x,y,z){
        console.log(`x=${x} ,y=${y}, z=${z} Sum==>${x+y+z}`)
    }
    calc(x,y,z,a){
        console.log(`x=${x} and y=${y} ,z=${z},a=${a} Sum==>${x+y+z+a}`)
    }
}
let sum1 = new Calculator()
//Call Direct last calc() method==>Its Like Update calc method 
sum1.calc(5,5) //x=5 and y=5 ,z=undefined,a=undefined Sum==>NaN
sum1.calc(5,5,5) //x=5 and y=5 ,z=5,a=undefined Sum==>NaN
sum1.calc(5,5,5,5)//x=5 and y=5 ,z=5,a=5 Sum==>20

//Program 1 
class Calculator1{
    add(e,f,g,h){
        if (e != undefined && f != undefined && g != undefined && h != undefined) {
            console.log(e+f+g+h)
        }
        else if (e != undefined && f != undefined && g != undefined) {
            console.log(e+f+g)
        }
        else if(e != undefined && f != undefined){
            console.log(e+f)
        }
    }
}


let sum2 = new Calculator1()
sum2.add(5,5)  //10
sum2.add(5,5,5) //15 
sum2.add(5,5,5,5) //20