// program  4
class FatherA {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    displayFName(){
        console.log(this.firstName + this.lastName)
    }

}

class SonA extends FatherA {
    constructor(firstName, lastName,sname){
        super(firstName, lastName)
        this.sname = sname

    }

    displaySname(){
        console.log(this.sname+this.firstName+ this.lastName)
    }

}

class DaughterA extends FatherA {
    constructor(firstName, lastName,dname){
        super(firstName, lastName)
        this.dname = dname

    }
    displayDname(){
        console.log(this.dname+this.firstName+ this.lastName)
    }
    
}
let yash = new SonA("sunil","dherange","yash")
yash.displayFName()
yash.displaySname()

let aish = new DaughterA("sunil","dherange","aishwarya")
aish.displayFName()
aish.displayDname() 