//Program 4
// function add() {
//     let a = 20
//     let b = 30
//     console.log(a + b)
//     console.log(c+d) //Error not accessible

//     function add1() {
//         let c = 50
//         let d = 100
//         console.log(c + d) 
//         console.log(a + b + c + d)

//         function add2() {
//             let e = 300
//             let f = 500
//             console.log(e + f + a + b + c + d) 
//         }
//         add2()
//     }
//     add1()
// }
// add() 

//Program 5 
//-------------------
let e = 10 //global access
let f = 20
function init() {
    let a = 5
    let b = 2
    console.log(a + b) //7
    console.log(e + f) //30


    function init1() {
        let e=900
        let f=300
        let p = 200
        let q = 300
        console.log(a + b + p + q)
        console.log(a + b + e + f)

        function init2() {
            let e = 1000
            let f = 500
            console.log(e + f) //1500
        }
        init2()
    }
    init1()
}
init()

