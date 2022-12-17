// retrive 
/* <p class="one two three">This is para one</p>
<p id="two">This is para two</p>
<p name="three">This is para three</p> */

let tagName = document.querySelector('p')
let id = document.querySelector('#two')
let classN = document.querySelector('.one')
let name = document.querySelector('p[name="three"]')


// let id = document.getElementById('two')
// console.log(id)

// let nodeList = document.querySelectorAll('.two') //nodelist
// console.log(nodeList.length)

// let htmlCollection = document.getElementsByClassName('two')//HTML Collection
// console.log(htmlCollection.length)
// document.getElementById('an')

// let classOne = document.querySelectorAll('.one') // nodeList
// console.log(classOne)

// let classTwo = document.getElementsByClassName('one') //HTML Collection 
// console.log(classTwo)

//document.getElementById('two')  -  single element
//document.getElementsByTagName('p') - htmlCollection
//document.getElementsByClassName('one') - htmlCollection

// ----------------------- Attribute -----------------------
let pElement = document.querySelector('.five')
// console.log(pElement)
// console.log(pElement.className)
// pElement.className = "six"  // update class value ==> class="six"

pElement.classList.add('six') 

// add class value ==> class="six five"
pElement.classList.add('seven')// add class value ==> class="six five seven"
pElement.classList.remove('six') // remove class value ==> class="five seven"
pElement.classList.toggle('six')// Toggle class value ==> class="six five seven"
pElement.classList.toggle('six')// Toggle class value ==> class="five seven"
console.log(pElement)
