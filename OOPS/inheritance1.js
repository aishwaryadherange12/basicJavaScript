//Inheritance 
//Program 3 ==> Dynamic Values Without Super
class Student{
    constructor(fname,lname,adhar){
        this.fname = fname
        this.lname = lname
        this.adhar = adhar
    }
    displayName(){
        console.log(this.fname+" "+this.lname+" "+this.adhar)
    }
}

let aish = new Student('aish','D',4856)
console.log(aish) // Student { fname: 'aish', lname: 'D', adhar: 4856 }
aish.displayName() // aish D 4856

class Teacher extends Student{
    salary = 10000
}

aish1 = new Teacher('Aish',"D",4856)
console.log(aish1.salary) //10000


class Professor extends Teacher{
    //Increase Salary By 10%
    salary = this.salary+ this.salary/10
    subject = 'Java Script'
}

aish2 = new Professor('Aish','D',4856)
aish2.displayName() //aish D 4856
console.log(aish2.subject) //Java Script
console.log("Incrase Salary "+aish2.salary) //11000

//If we want dynamic arguments in child class through constructor 
//==>We must call super immidiate after child constructor 

