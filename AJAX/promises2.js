//----------------Program 3----------------

let pro = new Promise(function(resolve,reject){
    let a = 500
    let b = 100
    if(p==q){
        resolve('I am resolve..')
    }
    else{
        reject('I am rejected..')
    }
})
.then(function(str){
    console.log(str)
})
//Without writing another function we can write catch block
.catch(function(str){
console.log(str)
})

//------------Program 4---------------
let pro1 = new Promise(function(resolve,reject){
    let x = 50
    let y = 100
    if(x==y){
        resolve(`I am Resolve=> x=${x} y=${y}`)
    }
    else{
        reject(`I am Rejected=> x=${x} y=${y}`)
    }
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(str){
    console.log("I am always Execute...")
})