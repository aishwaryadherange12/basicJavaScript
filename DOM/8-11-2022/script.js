let h1Tag= document.querySelector('h1')
let inputTag = document.querySelector('input')
let buttonTag = document.querySelector('button')


buttonTag.addEventListener('click',function(){
   let colorName = inputTag.value
   h1Tag.style.color = colorName
   inputTag.value = ""
})