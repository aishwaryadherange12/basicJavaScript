//Program 4
//If we want dynamic arguments in child class through constructor 
//==>We must call super immidiate after child constructor 

class GrandFather{
    constructor(g_fname,g_lname){
        this.g_fname = g_fname
        this.g_lname = g_lname
    }
    displayGName(){
        console.log(`${this.g_fname} ${this.g_lname}`)
    }
}

class Father extends GrandFather{
        constructor(g_fname,g_lname,f_name){
            super(g_fname,g_lname) 
            this.f_name = f_name
        }
        displayFName(){
            console.log(`${this.f_name} ${this.g_fname} ${this.g_lname}`)    
        }
}

class Daughter extends Father{
        constructor(g_fname,g_lname,f_name,d_fname){
            //We have to call super keyword imidiate after child constructor 
            //Error==>Must call super constructor in derived class before accessing 'this'
            // or returning from derived constructor at new Father Class
            super(g_fname,g_lname,f_name) //parent argumnents
            this.d_fname = d_fname
            this.age = 23

        }
        displayDName(){
            console.log(`${this.d_fname} ${this.f_name} ${this.g_lname}`)
        }
}

let aish = new Daughter('sitaram','dherange','sunil','aishwarya')
//console.log(aish)

console.log(aish.age) //23
aish.displayGName() //sitaram dherange
aish.displayFName() //sunil sitaram dherange
aish.displayDName() //aishwarya sunil dherange

