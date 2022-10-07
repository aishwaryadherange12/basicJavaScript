// demo session string 

// introvert   // extrovert
// calm         // loud
// less social  // socially active
// speaks less  // speaks 

let h1 = 10 // -90,88,89.9,0
console.log(h1)
console.log(typeof h1)//number

let g = "aishwarya" // string ...  a,v,33,44,5$$
console.log(g)
console.log(typeof g)

let r = true 
console.log(r)
console.log(typeof r)

// Javascript --- everything is object 
// Object - property and method
//
// method action and return

// Type human -- amol
// property - age , weight ,color, height , gender
// method  - talk(), walk()

// Type vehicle - Audi(object-physical appearance)
// property - color , speed , type , modelNo 
// method - start() , stop()

// Bank - ICICI
// property -- accNo , accHolder , bal , IFSC code
// method - deposit() , withdrawl()


// Method - Gym 
// action --- excercise
// return --- health 


// Javascript --- Object --- property and method
// method -- action and return type
//string store the value by index
let firstName = "Aishwarya"
// 0  1  2  3  4  5  6 7 8
// A  i  s  h  w  a  r y a
console.log(firstName[0])
console.log(firstName[5])

// property and method
let q1 = firstName.length
console.log(q1)

// Method
// toUpperCase
// action -- convert every character to Capital
// return -- string 

let city = "Pune"
let q2 = city.toUpperCase()
console.log(q2)

let city2 = "Mumbai"
// toLoweCase()
// action - to convert every character to small 
// return - string
let q3  =  city2.toLowerCase()
console.log(q3)


// property --- length 
// method - toUpperCase() , toLowerCase()

// includes
// action - search for character or sub-string 
// return (boolean) else false

let state = "punjab"
let q4 = state.includes('p')
console.log(q4)
let q5 = state.includes('P')
console.log(q5)
let q6 = state.includes('pun')
console.log(q6)
let q7 = state.includes('Pun')
console.log(q7)

// startsWith()
let a = "sakshi"
let q8 =a.startsWith('s')
console.log(q8)
let q9 =a.startsWith('sa')
console.log(q9)

// endsWith()
let a1 = "chandra"
let q10 =a1.endsWith('i')
console.log(q10)
let q11 = a1.endsWith('vi')
console.log(q11)
let q12 = a1.endsWith('Vi')
console.log(q12)


