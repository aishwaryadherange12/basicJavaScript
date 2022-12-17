// program3
let headingOne = document.querySelector('h1')
console.log(headingOne)
headingOne.addEventListener('mouseover',function(){
    headingOne.style.color = "yellow"
    headingOne.textContent = "AD"
})
headingOne.addEventListener('mouseout',function(){
    headingOne.style.color = "purple"
    headingOne.textContent = "Aishwarya"
})