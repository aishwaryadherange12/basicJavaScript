//if we want to guess finite time like 5 times
//Ask user how many times you wanat to guess
let n = prompt("Enter how many times you want to guess=> ")
for(let i=0; i<n;i++){
        let randomNumber = Math.floor(Math.random()*6) + 1
        console.log(randomNumber) 
        let guessNumber = prompt("Enter Number Between 1 to 6")
        if(randomNumber == guessNumber){
        console.log("You Guess Correct!..")
        break
        }
        else{
        console.log("You Guess Incorrect")
        }
}