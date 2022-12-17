//As its base JavaScript language is synchronous. 
//Synchronous means the code runs in a particular sequence of instructions given in the program. 
//Each instruction waits for the previous instruction to complete its execution.

//-----------Program 1-----------------------
//Synchronous Order //Jisko pehle call uska first output//line by line execution
function addA(){
    console.log('A is called')
}
function addB(){
    console.log('B is called')
}
//addB()
//addA()

//Asnynchronous =async in nature non blocking in nature
function addC(){
    setTimeout(() => {
        console.log('C is called')     
    }, 3000);
   
}
function addD(){
        console.log('D is called')     

}
addC() //C is called after 3 sec
addD()