// object is descriptive and array is not descriptive
// object stores as key:value or prop:value
let person = {
    'fname' : 'aish',
    'lname' : 'd',
    'age': 23  
}
//retrive, add,update,delete
//dot and bracket
// 1.Retrive() =>2 types
// Retrive with dot
console.log(person.fname)
// Retrive with brackets
console.log(person['lname'])

//2.Add key and value in object
person.lang = "marathi"

person['skill'] = 'java'

console.log(person)//{ fname: 'aish', lname: 'd', age: 23, lang: 'marathi', skill: 'java' }

//3.update

person.lang = 'english'
person['age'] = 24
console.log(person) //{ fname: 'aish', lname: 'd', age: 24, lang: 'english', skill: 'java' }

//4.delete

delete person.skill
delete person['lang']
console.log(person)//{ fname: 'aish', lname: 'd', age: 24 }