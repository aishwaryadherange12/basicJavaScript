let vehicle = {
    color:"red",
    type:"tata",
    skill:['java']
}
for(key in vehicle){
    //console.log(key) //color type print keys
    console.log(key,vehicle[key])
    // color red
    // type tata
}
vehicle.skill.shift("java")
console.log(vehicle)