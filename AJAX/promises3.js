//Return Value or Pass value in next .then block
let pro = new Promise(function(resolve,reject){
    if("aishwarya".startsWith('a')){
        resolve(true)
    }
    else{
        reject(false)
    }
})
.then(function(str){
    console.log(str)
    return 50
})
//We can get return value in next then block
.then(function(return_value){
    //Return value of first then block
    console.log("Return Value "+return_value)
    //We can modify value of return value
    console.log(`Modify Value ${parseInt(return_value)+20}`)
})
.catch(function(str){
    console.log(false)
})
.finally(function(){
    console.log("I will always run..")
})