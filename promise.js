//promise
//1.pending 
//2.If Promise resolve
//3.If promise reject

let pro = new Promise(function(resolve,reject){
    let x = 5
    let y = 5

    if(x==y){
        resolve('I am Solved')
    }
    else{
        reject('I am rejected') //I am rejected
    }
})
//--------Program 1----------
pro.then(function(val1){
    console.log(val1)
},function(val2){
    console.log(val2)
    console.log('hi')
})

//-----Program2--------------
pro.then(function(val1){ //Resolve in first then
    console.log(val1)
    return 11

})
.then(function(val3){
    console.log(val3) //returned value of first then =>11
})
.catch(function(val2){
    console.log(val2) //Reject will catch
})