class Student{
        constructor(fullName,dateOfBirth,adhar){
            this.fullName = fullName
            this.dateOfBirth = dateOfBirth
            this.adhar = adhar
        }     
        displayName(){
            console.log('I am '+this.fullName)
            console.log(`I am ${this.fullName}`)
        }

}

let aish = new Student('Aishwarya D','12-9-1998','4899')
aish.displayName() //I am Aishwarya D

class Teacher extends Student{
        setSalary(salary){
            this.salary = salary
        }

        displayNameAndSalary(){
            console.log(`I am ${this.fullName} and I have ${this.salary} salary`)
        }
}

//let aish1 = new Teacher()
//console.log(aish1) //fullName,DOB,adhar =>undefine
let aish1 = new Teacher('Aish D','12-9-1998',4899)
console.log(aish1)  //Teacher { fullName: 'Aish D', dateOfBirth: '12-9-1998', adhar: 4899 }

aish1.setSalary(5000)
aish1.displayNameAndSalary() //I am Aish D and I have 5000 salary


class Proffesor extends Teacher{
       IncreaseSalary(){
        //Increase 10% Salary
            this.salary = this.salary + (this.salary/10)
            console.log(`Increase Salary ${this.salary}`)
        }
        setSubject(subject){
            this.subject = subject
        }
       displayProfessorSalary(){
        console.log(`Professor Salary ${this.salary()}`)
       } 

}

let aish3 = new Proffesor('aish D','12-9-19998',4899)
console.log(aish3) //Professor { fullName: 'aish D', dateOfBirth: '12-9-1998', adhar: 4899 }

aish3.setSalary(10000)
aish3.IncreaseSalary()
