//Inheritance 
//Program 1 ==>Hardcode Value
class Student{
    fname = 'aish'
    lname = 'D'
    displayName(){
        console.log(this.fname+" "+this.lname)
    }
}

let aish = new Student()
console.log(aish) // Student { fname: 'aish', lname: 'D' }
aish.displayName() // aish D

class Teacher extends Student{
    salary = 10000
}

aish1 = new Teacher('Aish',"D") //aish D
console.log(aish1.salary) //10000


class Professor extends Teacher{
    subject = 'Java Script'
}

aish2 = new Professor('Aish','D')
aish2.displayName() //aish D
console.log(aish2.subject) //Java Script

//Program 2 ==>Hardcode Value
//GrandFather
