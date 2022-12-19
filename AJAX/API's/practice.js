function SingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return res.data
    })
}

// async function SingleUserSS(id1,id2,id3){
//     let a=await SingleUser(id1) //4
//     let b=await SingleUser(id2) //4
//     let c=await SingleUser(id3) //4
//     console.log(a,b,c)
// }
// SingleUserSS(1,2,3)

async function SingleUserSS(id1,id2,id3){
    let data = await Promise.all([
        SingleUser(id1),
        SingleUser(id2), //4
        SingleUser(id3)   
    ])
    console.log(data)
}
SingleUserSS(1,2,3)