const nodeList = document.querySelectorAll("h1");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click',function(){
        nodeList[i].style.color = "red";
    } )  
}