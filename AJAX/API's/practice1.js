async function display(){
   let data=await Promise.all([
          Promise.resolve("Hello"),
          Promise.resolve("Bye"), 
         //Promise.reject("Bye")
    ])
    console.log(data)
}
display()
