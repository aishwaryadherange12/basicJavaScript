let inputBox = document.querySelector('input')
let buttonA = document.querySelector('button')
let ulList = document.querySelector('ul')


buttonA.addEventListener('click',function(){
    let text = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text 
    ulList.appendChild(newLi)
    inputBox.value = " "
})