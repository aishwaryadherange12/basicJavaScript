//Inheritance
// A class that inherits from another class can reuse the methods and fields of that class.

class GrandFather {
    g_firstName = "sitaram"
    g_lastName = "dherange"
    displayGName(){
        console.log(this.g_firstName +" "+ this.g_lastName)
    }
}

class Father extends GrandFather {
    f_firstName = "sunil"
    displayFName(){
        console.log(this.f_firstName +" "+ this.g_firstName +" "+ this.g_lastName)
    }
}

class Daughter extends Father {

    d_name = "aishwarya"
    displaySName(){
        console.log(this.d_name +" "+ this.f_firstName +" "+ this.g_lastName)
    }
}

let aishwarya = new Daughter()
console.log(aishwarya.g_firstName) //sitaram
console.log(aishwarya.g_lastName)  //dherange
console.log(aishwarya.f_firstName) //sunil
console.log(aishwarya.d_name) //aishwarya 

aishwarya.displayGName() //sitaram dherange
aishwarya.displayFName()//sunil sitaram dherange
aishwarya.displaySName() //aishwarya sunil dherange

// Regular
let sitaram = new GrandFather()
console.log(sitaram.g_firstName) //sitaram
console.log(sitaram.g_lastName)  //dherange
sitaram.displayGName() //sitaram dherange
