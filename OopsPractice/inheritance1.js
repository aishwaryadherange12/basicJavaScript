// Program 2
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

}

let shirish = new Father('sunil','dherange')
console.log(shirish.GfirstName) //sunil
console.log(shirish.lastName) //dherange
