let students  = [
    {
        firstName:"aishwarya",
        lastName:"dherange",
        age:24,
        city:"sangamner",
        skills:["python","javascript","html",'CSS3'],
        marks:80
    },
    {
        firstName:"vaish",
        lastName:"lonkar",
        age:23,
        city:"nashik",
        skills:["java"],
        marks:45
    },

    {
        firstName:"yashu",
        lastName:"mehta",
        age:23,
        city:"mumbai",
        skills:["sql","css","html","java"],
        marks:90
    },

    {
        firstName:"ash",
        lastName:"godse",
        age:26,
        city:"pune",
        skills:["sql","javascript","python"],
        marks:49
    }

]
//Progarm 1
//Retrive the fullName of all student
//For loop
for(let i=0;i<students.length;i++){
    console.log(students[i].firstName,students[i].lastName)
}
//using foreach
students.forEach(function(el){
    console.log(el.firstName,el.lastName)
})

//Program 2
//Find the full Name of student whoes age is greter that 25
students.forEach(function(el){
    if(el.marks>50){
        console.log(el.firstName,el.lastName)//aishwarya and yashu
    }
})
//by using filter method
let above50 = students.filter(function(el){
    return el.marks>50
})

above50.forEach(function(el){
    console.log(el.firstName,el.lastName)
})
//Program 3
//find the sum of all student age and average
let sumAge =students.reduce(function(acc,el){
   return el.age+acc
},0)
console.log(sumAge) //96
let avgAge = sumAge/students.length
console.log(avgAge) //24

// program 4 - firstname with city pune
students.forEach(function(el){
    if(el.city =="pune"){
        console.log(el.firstName) //ash
    }
})

// program 5
// add salesforce to every student
students.forEach(function(el){
    el.skills.push("salesforse")
})
console.log(students)

// program 6
// print firstname and number of skills
students.forEach(function(el){
    console.log(el.firstName,el.skills.length)
})

// program 7
// userwith city sangamner && python
students.forEach(function(el){
    if(el.city=="sangamner" && el.skills.includes("python")){
        console.log(el.firstName) //aishwarya
    }
})
//or using filter
let q1 = students.filter(function(el){
    return el.city =="sangamner" && el.skills.includes('python')
})
console.log(q1)
q1.forEach(function(el){
    console.log(el.firstName)
})
// program 8
//print firstname and skills of person whos firstName starting from 'a'
students.forEach(function(el){
    if(el.firstName.startsWith('a')){
        console.log(el.firstName,el.skills)
    }
})
// program 9 
// add country:"india" to all students
students.forEach(function(el){
    el.country = "India"
})
//console.log(students)
//program 10 
//add grace 10 marks who has less than 50 marks
//print sum who has > 50 marks
students.forEach(function(el){
    if(el.marks<50){
        el.marks = el.marks+10
    }
})
console.log(students)
let gthan50 = students.filter(function(el){
    return el.marks>50
})
console.log(gthan50)
let sumMarks = gthan50.reduce(function(acc,el){
    return acc+el.marks
},0)
console.log(sumMarks) //284
//print sum who has greater than 50 marks
let sum = students.reduce(function(acc,el){
    if(el.marks>50){
      acc=acc + el.marks
    }    
    return acc
},0)

console.log("Sum Using Reduce Method=>",sum)