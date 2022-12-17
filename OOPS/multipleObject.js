let info = class {
    constructor(firstName, lastName, age, skills) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.skills = skills
    }
}

let students = [
    new info('aish','d',24,['java','py','js']),
    new info('vaish','l',22,['law']),
    new info('patu','d',23,['py','js']),
    new info('pooja','d',24,['node js'])
]

students.forEach(function(el){
    //console.log (el) //print all object
    for(let key in el){
        //console.log(key) //print keys only
        console.log(key,el[key])
    }
})