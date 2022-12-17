// let names = ['vaish','yashu','aish','patu']
// names.sort()
// console.log(names)

let marks = [7,6,55,5,4,23,2]
console.log(marks.sort(compareFunction))

function compareFunction(a,b){
   //1. return <0 .. a come first
   //2. return =0 nothing change
   //3. return >0  .. b comes first 
   return a-b;
   //7-6 =1 ==>     6 comes first
   //[6,7,55,5,4,23,2]
   //7-55= -49 ==> 7 comes first
   //[6,7,55,5,4,23,2]
   //55-5 = 50 ==> 5 comes first
   //[6,7,5,55,4,23,2]
   //55-4 = 51 ==>4 comes first
   //[6,7,5,4,55,23,2]
   //55-23=32 ==> 23 comes first
   //[6,7,55,5,4,23,2]
}
