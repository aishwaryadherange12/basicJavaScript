//2. Function Overriding=> Different Class,Same Method, Same Signatures(Same Parameters)
//
class WorldBank {

    loan(){
        console.log('I am loan from WB')
    }
    save(){
        console.log('I am save from WB')
    }

}

class BankOfBaroda extends WorldBank{

    loan(){
        console.log('I am loan from bob')
    }
    save(){
        console.log('I am save from bob')
    }

    branchName(){
        console.log('Bank Of Baroda branch')
    }
}

let bob = new BankOfBaroda()

bob.loan() //I am loan from bob
bob.save() //I am save from bob
bob.branchName() //bob branch
