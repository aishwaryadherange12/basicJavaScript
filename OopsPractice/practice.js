function Collegue(firstName,lastName,skill){
    this.firstName = firstName
    this.lastName = lastName
    this.skill = skill
}

let aish = new Collegue('aish','D',['java','js','python'])
console.log(aish)

aish.skill.push('Cypress') 
console.log(aish.skill)

aish.city = "sangamner"
console.log("City=> ",aish.city)

Collegue.prototype.displayName = function(){
    console.log(this.firstName+" "+this.lastName)
    console.log(this.skill.shift())
}
Collegue.prototype.exp = 2

console.log(aish.exp)
aish.displayName()
console.log(aish)