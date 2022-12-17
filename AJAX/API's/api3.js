//Get Single User By ID in console

function getSingleUserInfo(id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then(function (res) {
      //console.log(res) //get respnse but unreadable formate 
      return res.json();
    })
    .then(function (str) {
      //console.log(str); // data, support
      // console.log(str.data); //id,email,fname,lname and avtar
      console.log(str.data.id); //8
    });
}
getSingleUserInfo(9);