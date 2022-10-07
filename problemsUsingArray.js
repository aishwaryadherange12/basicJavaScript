//Problem 1 Get values in new array which is greater than 50 
let marks = [45,56,85,90,39,75]
let greater50 = []
for(let i = 0; i<= marks.length ; i++){
    if(marks[i]>50){
        greater50.push(marks[i])
    }
}
console.log(greater50)

//Problem 2 Calculate age using birth year and add it in new array
let birthYear = [1998,1999,2000,2001,2002]
let age = []
let currentYear = 2022
for(let i=0; i<birthYear.length; i++){
    let age1 = currentYear-birthYear[i]
    age.push(age1)
}
console.log(age)

//problem 3 Sum of consecutive array 
let numbers = [11,22,33,44]
let sum = 0
for(let i = 0;i< numbers.length; i++){
    sum = sum + numbers[i]
}
console.log(sum)