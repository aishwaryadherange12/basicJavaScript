//1.Math.floor() => Give a smallest digit number not decimal
console.log(Math.floor(15.3)) //15
console.log(Math.floor(15.8)) //15
console.log(Math.floor(-15.4)) //-16

//2.Math.ceil() => Give a large digit number not decimal
console.log(Math.ceil(12.3))  //13
console.log(Math.ceil(12.8))  //13
console.log(Math.ceil(-12.8))  //12

//3.Math.round() =>Round up Value into Decimal
console.log(Math.round(7.2)) //7
console.log(Math.round(7.5)) //8
console.log(Math.round(7.9)) //8

//4.Math.random() =>Generate random numbers between 0 to 1
console.log("Random Number=> ",Math.random())

//Generate random numbers between 0 to 5
console.log(Math.random()*6) //print decimal 0 to 5.999999
console.log(Math.floor(Math.random()*5)) // print 0 to 5

//Generate random numbers between 1 to 6
console.log(Math.floor(Math.random()*6)+1)//print 0 to 6