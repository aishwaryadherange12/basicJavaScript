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
        firstName:"yashasvi",
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
// How many element present in student
// console.log("Length Of Array Is=> ",students.length)

//retrive
console.log(students[0]) //print object 1
console.log(students[0]['firstName']) //aishwarya
//add
students[1].skills.push("javascript")
console.log(students[1]) 
//or
students[0].middleName = "sunil"
//update
students[3].age = 28
students[2]["firstName"] = "yashu"
//delete
delete students[0].middleName
console.log(students)