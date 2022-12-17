//Program 3
class GFather {
    constructor(firstName, lastName){
        this.GfirstName = firstName
        this.lastName = lastName
    }
    displayGName(){
        console.log(this.GfirstName + this.lastName)
    }
}

class Father extends GFather {
    constructor(firstName, lastName,fFirstName){
        super(firstName, lastName)
        this.fName = fFirstName
    }
    displayFName(){
        console.log(this.fName +this.GfirstName +this.lastName)
    }

}
class Son extends Father {
    constructor(firstName, lastName,fFirstName,sName){
        super(firstName, lastName,fFirstName)
        this.sName = sName
    }
    displaySName(){
        console.log(this.sName +this.fName +this.lastName)
    }
}
let chinmay = new Son ("manohar","deshpande","shirish","chinmay")
chinmay.displayGName()
chinmay.displayFName()
chinmay.displaySName()

let shirish = new Father('manohar','deshpande' , "shirish")
console.log(shirish.GfirstName)
console.log(shirish.lastName)
console.log(shirish.fName)

shirish.displayGName()
shirish.displayFName()