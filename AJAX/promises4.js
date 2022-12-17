//call back hell problem solution using Promises

function createUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("User Created...")
        },3000)
    })
}

function getUserID(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Get User by ID")
        },2000)
    })
}

function displayUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Display User Info By ID")
        },1000)
    })
} 
createUser()
.then(function(str){
    console.log(str)
    return getUserID()
     //Return Next Function In Second .then Function 
})
.then(function(str){
    console.log(str)
    return displayUser()
    //Return Next Function In Third .then Function 
})
.then(function(str){
    console.log(str)
})