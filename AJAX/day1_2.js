//Async in nature=>Do not block Execution
//code async hain lekin karna sync hain ==>non Blocking in nature
//-----------Program 2 -----------------------
//createUSer()==>Create User gwnerate Id,
//getUser()==>  Get User By ID , 
//infoDisplay()==> Display Info of that user
function createUser(){
    setTimeout(() => {
        console.log('Create User Called')     
    }, 3000);
   
}
function getUser(){
    setTimeout(() => {
        console.log('Get User Called')     
    }, 2000);
   
}
function DisplayUser(){
    setTimeout(() => {
        console.log('Display User called')     
    }, 1000);
   
}
getUser()
DisplayUser()
createUser()
//First Print 1.Display User Called 2.Get User Called 3.Create User Called
//------------------Problem Statement-----------

//Code to async hain lekin execution sync karna hain==>non Blocking in nature
