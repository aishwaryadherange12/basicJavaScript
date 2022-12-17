//Parallel Promise
//In Parallel Promise All Condition Should Be Positive else Error Occured 
async function parallelPromise(){
   let data = await Promise.all([
        Promise.resolve("Hello"),
        Promise.resolve("Hello1"),
        Promise.resolve("Hello2"),
        //Promise.reject("Bye") //Uncaught (in promise) Bye
    ])
    console.log(data)
}
parallelPromise()