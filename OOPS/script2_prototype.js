//function constructor
function Vehical(fName,company,model,color){
    this.fName = fName
    this.company = company
    this.model = model
    this.color = color
   // this.displayCompany = function(){
   //     this.company
   // }
}

let aishCar = new Vehical('Aish','Mahindra','Thar','Black')
let vaishCar = new Vehical('Vaish','Tata','Nexon','Red')
console.log(aishCar) //Vehical {fName: 'Aish' company: 'Mahindra', model: 'Thar', color: 'Black', displayCompany: ƒ}
console.log(vaishCar) //Vehical {fName: 'Vaish' company: 'Tata', model: 'Nexon', color: 'Red', displayCompany: ƒ}


//Problem is we have to hide those methods from users due to some security reasons ==> displayCompany: ƒ
//So we use prototype

console.log(aishCar instanceof Vehical) //true
console.log(vaishCar instanceof Vehical) //true

console.log(aishCar.__proto__ == Vehical.prototype) //true
console.log(vaishCar.__proto__ == Vehical.prototype) //true

//Add Method In Parent Can Access Child
Vehical.prototype.displayCompany = function(){
    console.log(this.fName," Wants To Buy",this.company," Car")
}
aishCar.displayCompany()
vaishCar.displayCompany()
//Add Property In Parent Can Access Child
Vehical.prototype.milage = 100

console.log(aishCar.milage) //100
console.log(vaishCar.milage) //100

console.log(aishCar.hasOwnProperty('fName')) //true
console.log(aishCar.hasOwnProperty('model')) //true
//milage is not aishcar and vaishcar property
console.log(aishCar.hasOwnProperty('milage')) //false
