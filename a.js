let student0 = {
    firstName: "Mayuri",
    family: {
        father: "kumar",
        mother: "shakti",
        sisters: [
            {
                fn: 'kaveri',
                age: 12,
                skill: ['python', 'selenium']
            }
        ]
    }
}

let { family: { sisters: [{ skill: [a1, b1] }] } } = student0
console.log(b1)
Footer