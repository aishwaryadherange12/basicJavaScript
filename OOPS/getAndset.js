//In JavaScript, accessor properties are methods that get or set the value of an object.
//set==> to define a setter method to set the property value
//get==> to define a getter method to get the property value
class Vehicle {
    setName(vName){
        this.vName = vName
    }
    setColor(color){
        this.color = color
    }
    setSpeed(speed){
        this.speed = speed
    }
    setRegNo(reg_no){
        this.reg_no = reg_no
    }
    getName(){
        console.log(this.vName)
    }
    getColor(){
        console.log(this.color)
    }
    getSpeed(){
        console.log(this.speed)
    }
    getRegNo(){
        console.log(this.reg_no)
    }
}

let tata_nano =  new Vehicle()
console.log(tata_nano) //Vehicle {}

tata_nano.setName("Tata Nano") 
tata_nano.getName() //Tata Nano

tata_nano.setColor("Black")
tata_nano.getColor() //black

tata_nano.setRegNo("MH17 9387")
tata_nano.getRegNo() //MH17 9387

tata_nano.setSpeed(80)
tata_nano.getSpeed() //80