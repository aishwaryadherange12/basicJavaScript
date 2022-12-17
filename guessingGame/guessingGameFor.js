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

// For loop --->

let randomNo = Math.floor(Math.random() * 6)
console.log(randomNo)  // 0 - 5 // number
// 1

// let userInput = prompt("Plz enter no. in b/t 0-5")
// console.log(userInput)        // string

// /// 1 --> "1"               "1"

// if (String(randomNo) === userInput) {
//           console.log("UR Guess is CORRECT")
// } else {
//           console.log("UR Guess is IN-CORRECT")
// }

// for (let i = 0; i < 6; i++) {
//           let userInput1 = prompt("Plz enter no. in b/t 0-5")
//           if (String(randomNo) === userInput1) {
//                     console.log("UR Guess is CORRECT")
//                     document.write("UR Guess is CORRECT")
//                     break;
//           } else {
//                     console.log("UR Guess is IN-CORRECT")
//                     document.write("UR Guess is IN-CORRECT")
//           }
// }


// While loop

// let i = 0;
// while (i < 6) {
//           let userInput1 = prompt("Plz enter no. in b/t 0-5")
//           if (String(randomNo) === userInput1) {
//                     console.log("UR Guess is CORRECT")
//                     document.write("UR Guess is CORRECT")
//                     break;
//           } else {
//                     console.log("UR Guess is IN-CORRECT")
//                     document.write("UR Guess is IN-CORRECT")
//           }
//           i++
// }


// Difference b/t for loop & while loop---->

// let userInput1
// while (randomNo != userInput1) {
//           let userInput1 = prompt("Plz enter no. in b/t 0-5")
//           if (String(randomNo) === userInput1) {
//                     console.log("UR Guess is CORRECT")
//                     document.write("UR Guess is CORRECT")
//                     break;
//           } else {
//                     console.log("UR Guess is IN-CORRECT")
//                     document.write("UR Guess is IN-CORRECT")
//           }
// }
let userInput1
while (randomNo != userInput1) {
          let userInput1 = prompt("Plz enter no. in b/t 0-5")
          if (String(randomNo) === userInput1) {
                    console.log("UR Guess is CORRECT")
                    document.write("UR Guess is CORRECT")
                    break;
          } else {
                    console.log("UR Guess is IN-CORRECT")
                    document.write("UR Guess is IN-CORRECT")
          }
}