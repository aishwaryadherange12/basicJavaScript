//foreach
let name=['aish','vaish','yashu']
name.forEach(function(el){
    console.log(el)
})

//reduce
let marks=[10,20,30,40,50]

let q1 =marks.reduce(function(acc,el){
        return acc+el //10 //30 //60 //100 // 150
},0)
console.log(q1)

let avg = q1/5
console.log(avg)