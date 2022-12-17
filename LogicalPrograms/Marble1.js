//1000 Kg Marble Per Piece
//Carrier Can Carry Upto 5000 Piece
//MarbleWeight[i]
//Return Max No Of Marble Pieces You can put in carrier

//eg-100,200,300,1000 =>Sum=1600 Output 4 Marbels
//eg-900,950,800,1000,700,800 =>Sum=1600 Output 4 Marbels

const prompt = require('prompt-sync')({sigint: true});
let n = prompt("Enter how many times you want to guess=> ")
let MarbleWeight = []
  let i =0 
for(let i=0; i<n;i++){

  let guess = prompt('Enter Marble Weight=> ');
  // Convert the string input to a number
  guess = Number(guess);
  if(guess<=1000 && guess>=100){
   console.log(guess)   
   MarbleWeight.push(guess) 
   console.log(MarbleWeight)

   //Counter Of Marble
   i++;
   //Add Total Weight Of Marbal
  let totWeight =  MarbleWeight.reduce(function(acc,el){
     return acc+el
   },0)
   console.log("Total Input "+i)
   console.log("Total Weight "+totWeight)
   //Check Condition 5000 and pop element
      if(totWeight>=5000){
          MarbleWeight.pop()
          i--       
          console.log("Total Output "+i)
          break;
   }
  }
  else{
      console.log("Enter Weight Again")
  }
}