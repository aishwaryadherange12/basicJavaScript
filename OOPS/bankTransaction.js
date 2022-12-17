//1.Withdraw
//2.Deposite
//3.Store all transaction in array
//4.Display last 5 transaction
//5.Total Withdraw
//6.Total Deposite
class BankTransaction{
    constructor(balance,accNumber,city,branchName){
        this.balance = balance
        this.accNumber = accNumber
        this.city = city
        this.branchName = branchName
        this.transaction = []
    }
    //Deposite Money
    deposite(deposite){
        this.balance = this.balance + deposite
        console.log('Deposite Successfully!')
        this.transaction.push(deposite)
        console.log("Current Balance=>"+this.balance)
    }
    //Withdraw Money
    withdraw(withdraw){
        if(withdraw<=this.balance){
            this.balance = this.balance - withdraw
            this.transaction.push(-withdraw)
            console.log('Withdraw Successfull!')
            console.log("Current Balance=>"+this.balance)
        }
        else{
            console.log("Insufficient Balance !")
            console.log("Current Balance=>"+this.balance)
        }
    }
    //Last 5 Transactions
    miniStatement(){
        return this.transaction.slice(-5)
    }
    //Total Deposite
    totalDeposite(){
       let filterDeposite = this.transaction.filter(function(el){
            return el>0
        }) 
       let totalDeposite = filterDeposite.reduce(function(acc,el){
            return acc + el
        },0)          
        console.log("Total Deposite=>"+totalDeposite)    
    }
    //Total Withdraw
    totalWithdraw(){
        let filterWithdraw = this.transaction.filter(function(el){
             return el<0
         }) 
        let totalWithdraw =  filterWithdraw.reduce(function(acc,el){
             return acc + el
         },0)   
         console.log("Total Withdraw=>"+totalWithdraw)    
     }
}

let aish = new BankTransaction(100,10001,'sangamner','BOB')
aish.deposite(100)
aish.withdraw(50)
aish.deposite(3000)
aish.withdraw(50)
console.log(aish.miniStatement())
aish.totalDeposite()
aish.totalWithdraw()

let vaish = new BankTransaction(200,10002,'sangamner','Union Bank')
vaish.deposite(10)
vaish.withdraw(10)
vaish.deposite(50)
vaish.withdraw(50)
console.log(vaish.miniStatement())
vaish.totalDeposite()
vaish.totalWithdraw()