
//------------------Program 3-------------------

function getInfoDisplay(){
    setTimeout(function(){
        console.log('User Created')
        setTimeout(function(){
            console.log('Get User')
            setTimeout(function(){
                console.log('Display User')
            },1000)
        },2000)
    },3000)
}

getInfoDisplay()
//------------------Problem Statement-----------
//Tightly couple code no reusability in code
//Solution:= ES6Promises  -- 2015


//3 state of promise
//=>Promise use to==>
//a)Async code ko sync execution
//b)Async code parallel execution
//1.promise pending
//2.promise resolve
//3.promise reject