//Guess Number Infinite Time Until User Guess Correct Number
let randomNumber = Math.floor(Math.random()*6) + 1
//console.log(randomNumber) 
let userInput;
while(randomNumber!=userInput){
    randomNumber = Math.floor(Math.random()*6) + 1
    console.log(randomNumber) 
        userInput = prompt("Enter any number between 1 to 6")
    if(randomNumber == userInput){
        console.log('Guess is correct')
        break
    }
    else {
        console.log('Guess is incorrect , please try again !')
    }
        
}