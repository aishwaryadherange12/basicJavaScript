//Solution Of Async Wait to all

function singleUserInfo(id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      return res.data;
    });
}
//--------Parrallel API-----------
//All ids info display together and then await check that all execution complete or not
//Time Required less, id's are not depend on each other to execute
async function singleUserParallel(id1, id2, id3) {
  //Promise All Return Array and execute only all condition pass
  let data = await Promise.all([
    singleUserInfo(id1),
    singleUserInfo(id2),
    singleUserInfo(id3),
  ]);
  console.log(data);
}
singleUserParallel(1, 2, 3);