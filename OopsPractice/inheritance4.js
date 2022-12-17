class Father extends GFather {
    constructor(firstName, lastName,fFirstName){
        super(firstName, lastName)
        this.fName = fFirstName
    }
    displayFName(){
        console.log(this.fName +this.GfirstName +this.lastName)
    }

}
class Daughter extends Father {
    constructor(firstName, lastName,fFirstName,sName){
        super(firstName, lastName,fFirstName)
        this.sName = sName
    }
    displaySName(){
        console.log(this.sName +this.fName +this.lastName)
    }
}
let aishwarya = new Daughter ("sitaram","dherange","sunil","aishwarya")
aishwarya.displayGName()
aishwarya.displayFName()
aishwarya.displaySName()

// let sunil = new Father('sitaram','dherange' , "sunil")
// console.log(sunil.GfirstName)
// console.log(sunil.lastName)
// console.log(sunil.fName)

// sunil.displayGName()
// sunil.displayFName()
