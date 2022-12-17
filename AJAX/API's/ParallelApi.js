
function SingleUserDisplay(id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      // console.log(res.data) //Print First USer Id
      return res.data;
    });
}

//Async Function
//-----------Problem Statement------------------
//In Async Function We Wait until First Execution Is Not Complete
//So It Requires lot of time and all id's are not depend on each other 
//Hence We did not require to stop excecution of each other
async function SingleUser(id1, id2, id3) {
  let a = await SingleUserDisplay(id1);
  let b = await SingleUserDisplay(id2);
  let c = await SingleUserDisplay(id3);
  console.log(a, b, c);
}
SingleUser(1, 2, 3); //Given Id User Info Print

//---------------Solution-----------------------
//Therefore We Use Parallel Execution



