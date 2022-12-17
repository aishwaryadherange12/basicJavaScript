function renderHtml(obj){
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h2>${obj.id}</h2>`)
    document.write(`<img src = ${obj.avatar}>`)
    document.write(`<h3>${obj.email}</h3>`)
}

function getUserId(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        //console.log(res)
        return res.json()
    })
    .then(function(res){
        //console.log(res)
        console.log(res.data[0].id)
        return res.data[0].id
    })
}

function getInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
      return res.data
    })
}

getUserId(1)
.then(function(id){
    return getInfo(id)
})
.then(function(data){
    renderHtml(data)
})