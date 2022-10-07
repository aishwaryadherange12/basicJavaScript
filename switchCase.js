//switch without break
//print all result after match
let city  = "pune"
switch(city){
    case "pune":
    case "nasik":    
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("Invalid City")    
}
// switch with break
switch(city){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("Invalid City")    
}
 let score = 80
 switch(true){
    
    case (score <= 100 && score >= 90):
            console.log("A")
        break;
    case (score <= 89 && score >= 80):
            console.log("B")
         break;
    case (score <= 79 && score >= 70):
            console.log("C")
         break;
    case (score <= 69 && score >= 60):
            console.log("D")
         break;
    case (score <= 59 && score >= 0):
            console.log("E")
        break;
    case (score > 100 || score < 0):
            console.log("Enter Valid Number")  
        break; 
        default:
            console.log("Enter Number")
 }