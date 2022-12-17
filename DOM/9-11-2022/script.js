let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


buttonOne.addEventListener('click', function () {
    let text = inputText.value
   let newLi = document.createElement('li') // <li></li>
   console.log(newLi) 
   newLi.textContent = text // <li>Cherry</li>
    CreateButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})


ulList.addEventListener('click', function (event) {

    if (event.target.tagName == "BUTTON") {

        if (event.target.className === "remove") {
            // this code to remove element
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if(event.target.className == "up"){
            let li = event.target.parentElement // <li></li>
            let ul = li.parentElement  // <ul></ul>
            let prev = li.previousElementSibling
            if(prev){
                ul.insertBefore(li,prev)  //insert next ele previus to current ele
            }

        }

       else if(event.target.className == "down"){

            let li = event.target.parentElement // <li></li>
            let ul = li.parentElement  // <ul></ul>
            let next = li.nextElementSibling
            if(next){
                ul.insertBefore(next,li)
            }
          
        }

    }

})

function CreateButton(li) {
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove"  // <button>Remove</button>
    remove.className = "remove" // // <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up"  // <button>Down</button>
    up.className = "up" // // <button class = "up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "Down"  // <button>Down</button>
    down.className = "down" // // <button class = "down">Down</button>
    li.appendChild(down)
}
