//for(initialzation;condition;increament/decreament){
//      statements
// }
//code reduce
//repeatation 
//               0     1      2       3  
let animals = ['cat','dog','zebra','lion']
//animals.length = 4
for(let i = 0; i < animals.length; i++){  //i=0, i=1, i=2, i=3, i=4 (cond-false 4<4)  exit loop
    
    console.log(animals[i]) //print 0, 1, 2, 3
}
//              0      1        2       3       4
//names.length = 5
//i = 5-1 = 4    
let names = ['aish','vaish','ashwini','pooja','patu']
for(let i = names.length-1 ; i >= 0 ;i--){
   
    console.log(names[i]) // 

}
for(let i = 1 ; i<=5 ; i++ ){
    console.log(i)
}
for(let i = 5; i>=1 ; i--)
{
    console.log(i)
}

let a = 'aishwarya'
for(let i = 0 ; i< a.length ; i++){
    console.log(a[i])
}