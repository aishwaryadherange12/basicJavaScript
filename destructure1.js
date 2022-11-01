let student = {
    firstName: "Aishwarya",
    family: {
        father: "Sunil",
        mother: "Mangal",
        brother:      {
                fn: 'Yash',
                age: 18,
                skill: ['C', 'Java']
            }
        
    }
}

let { family: { brother: { skill: [s1, s2] } } } = student
console.log("Skills==>",s1,s2)//Skills==> C Java