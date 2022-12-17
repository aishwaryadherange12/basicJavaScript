//------Program 1 ----------------
let pro = new Promise(function(resolve,reject){
    let x= 50
    let y= 150
    if(x==y){
        resolve('I am Resolve')
    }
    else{
        reject('I am rejected')
    }
})

//-------------Code to consume Promise-----------
//.then(fun1(),fun(2))
//fun1=>resolve, fun2=reject
.then(function(str){
    console.log(str)
},function(str){
    console.log(str) 
})

//Output =>I am rejected


//------Program 2 ----------------

new Promise(function(resolve,reject){
    // let p = 5
    // let q = 5
    // //Output=1
    let p = 5
    let q = 10
    //output -1
    if(p==q){
        resolve([1,2,3,4])
    }
    else{
        reject([-1,-2,-3,-4])
    }
})
.then(function(str){
    console.log(str[0])
},function(str){
console.log(str[0])
})
