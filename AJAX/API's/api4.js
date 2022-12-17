//Get Single User In HTML format On Given Page
function getUserPageWise(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (res) {
            
            return res.json()
        })
        .then(function (properRes) {
            // console.log(properRes.data) //print all user id,email,dname,lname and avtar
            //console.log(properRes.data.id)//undefine
            return properRes.data[0] //return first user data
        })
        .then(function(str){
            console.log(str.id) //7 //First User Id
            console.log(str.first_name) //First User First name //Micheal
        })
}
getUserPageWise(2)