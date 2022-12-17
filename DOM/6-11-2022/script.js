let byTagName = document.querySelector('h1')
let byTagNameBtn = document.querySelector('button')
console.log(byTagName)
console.log(byTagNameBtn)

    byTagNameBtn.addEventListener('click',function(){
        byTagName.style.color = "blue"
        byTagName.textContent = "Aishwarya D"
    })