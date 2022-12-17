//Get All Users In HTML Format

//Direct Hit API from link
//Fetch Data From url
//Create A Function to write html elements
function createHTML(obj) {
  document.write(`<h5>${obj.id}</h5>`);
  document.write(`<h5>${obj.email}</h5>`);
  document.write(`<h5>${obj.first_name}</h5>`);
  document.write(`<h5>${obj.last_name}</h5>`);
  document.write(`<img src="${obj.avatar}"<br>`);
}

//Write A function To Fetch Data From URL
function getAllUsers() {
  //fetch return promise
  return fetch("https://reqres.in/api/users?page=2")
    //To consume promise
    .then(function (str) {
      //console.log(str.json())//return promise
      //But We have to convert it into json form
      return str.json(); //convert into json //return promise
    })
    .then(function (str) {
      str.data.forEach(function (ele) {
        createHTML(ele);
        return ele;
      });
    });
}
getAllUsers()

// getAllUsers()
// .then(function(ele){
//   console.log(ele)
// })