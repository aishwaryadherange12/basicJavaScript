let fruitList = document.querySelector('ul')
let inputTag = document.querySelector('input')
let buttonTag = document.querySelector('button')


buttonTag.addEventListener('click',function(){
    let text = inputTag.value
    let newList = document.createElement('li') // <li></li>
    newList.textContent = text
    fruitList.appendChild(newList)
    inputTag.value = ""
})