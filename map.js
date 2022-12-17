//DATA TYPES ==> Object, SET, MAP
//why SET => it store unique values
//why MAP => we can store different data types as a key of map
//in object all keys explicitely converted into STRING datatype 
//in object we cant take different data types as key
//in object we only take string as key

//MAP
//property==> size
//MAP methods==> set(),has(),get(),clear(),delete(),foreach

//Map having key value pair
let myMap = new Map()
console.log(myMap)//Map(0) {}

//1.add key and pairs
myMap.set("fname","aish")
console.log(myMap)//Map(1) { 'fname' => 'aish' }

myMap.set(1,"marathi")
console.log(myMap)//Map(1) { 'fname' => 'aish', 1 => 'marathi' }

myMap.set(true,"isStudent")
// myMap.set(["java","py"],"skills")
console.log(myMap)//Map(1) { 'fname' => 'aish', 1 => 'marathi' , true => 'isStudent' }

//property => size() ==>give length
console.log(myMap.size) //3

//2.has() ==>return boolean value
console.log(myMap.has(1)) //true
console.log(myMap.has(false)) //false

//3.get() ==>return key value =>return value respective to key

console.log(myMap.get(1)) //marathi

//4.delete() =>return boolean value

console.log(myMap.delete(1))//true //delete 1 and marathi
console.log(myMap)//Map(2) { 'fname' => 'aish', true => 'isStudent' }

//5.clear() ==> clear the key and values but remain data structure
//empty map
myMap.clear()
console.log(myMap)//Map(2) { 'fname' => 'aish', true => 'isStudent' }


let map2 = new Map([["fname","aish"],[2,"skills"],[true,"isMaried"]])
console.log(map2)//Map(3) { 'fname' => 'aish', 2 => 'skills', true => 'isMaried' }

//key()
console.log(map2.keys())//[Map Iterator] { 'fname', 2, true }

//values()
console.log(map2.values())//[Map Iterator] { 'aish', 'skills', 'isMaried' }

//entries() => Print keys and values
console.log(map2.entries())
// [Map Entries] {
//     [ 'fname', 'aish' ],
//     [ 2, 'skills' ],
//     [ true, 'isMaried' ]
//   }
//values print
// map2.forEach(function(el){
//     console.log(el)
// })

//for loop for keys one by one
for(let key of map2.keys()){
    console.log(key)//fname 2 true
}
//for loop for values one by one
for(let key of map2.values()){
    console.log(key)//fname 2 true
}
//for loop for key and values one by one
for(let [key,value] of map2.entries()){
    console.log(key,value)//fname 2 true
}

// let map2 = new Map([[[1,2,3],['a','b','c']]])
// console.log(map2)//Map(3) { 'fname' => 'aish', 2 => 'skills', true => 'isMaried' }
// console.log(map2[0])