let randomNumber = Math.floor(Math.random()*6) + 1
console.log(randomNumber) 
let guessNumber = prompt("Enter Number Between 1 to 6")
if(randomNumber == guessNumber){
    console.log("You Guess Correct!..")
}
else{
    console.log("You Guess Incorrect")
}