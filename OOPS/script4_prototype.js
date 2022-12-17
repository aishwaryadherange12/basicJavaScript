//2. ES6 Class
class Person{
    fname = 'aish'
    lname = 'D'
    age = 23
}
let aish = new Person()
let vaish =new Person()
console.log(aish)// Person { fname: 'aish', lname: 'D', age: 23 }
console.log(vaish)// Person { fname: 'aish', lname: 'D', age: 23 }
// Without Function Constructor==>
// ==>same value (hardcoded) for every object hence we use this.fname
//We can update like But number of lines increase So we use constructor
vaish.fName = 'Vaish' 
vaish.lName = 'L'
//Function Constructor
class Student{
  constructor(fName,lName,age){
    this.fName = fName
    this.lName = lName
    this.age = age
    this.display = function(){
        console.log(this.fName+" "+this.age)
    }
  }           
}

let yashu = new Student('yashu',"M",23)
console.log(yashu.fName+" "+ yashu.lName)
yashu.display()

//If we want to hide method or 
//add method in common area we can just declare method outside the constructor

class Flower{
    constructor(Name,color,fregrence){
      this.Name = Name
      this.color = color
      this.fregrence = fregrence      
    }           
    displayFlower(){
        console.log(this.Name+" "+this.color)
    }
  }
  
 let rose = new Flower('Rose',"Red",true)
 console.log(rose) //Flower { Name: 'Rose', color: 'Red', fregrence: true }
rose.displayFlower() //Rose Red

