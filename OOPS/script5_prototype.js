//3.Object.create Method
let aish = Object.create({})
console.log(aish) //{}
//Add Property In aish , but increase line of code
aish.fName = 'aish'
aish.age = 23
console.log(aish)//{ fName: 'aish', age: 23 }

//We have to pass object in Object.create Method
let Fruit = {
    init: function(fruitName,fruitColor,fruitTaste){
        this.fruitName = fruitName
        this.fruitColor = fruitColor
        this.fruitTaste = fruitTaste
    }
}
let apple = Object.create(Fruit)
apple.init('apple','red','sweet')
console.log(apple)
let orange = Object.create(Fruit)
orange.init('Orange','orange','bitter')
console.log(orange)