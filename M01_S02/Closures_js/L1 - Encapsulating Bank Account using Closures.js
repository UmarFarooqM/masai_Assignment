function createBankAccount(newbalance){

    let balance = newbalance;

    return { 
        deposit: function (amount){
        balance += amount ;
        return balance ;
    },
    withdraw : function(amount){
        balance -= amount
        return balance ;
    },
    getBalance : function(amount){
        return balance ;
    }
  };
        
}

const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120

// let account = createBankAccount(1000)
// console.log(account.deposit(100))

// console.log(account.withdraw(500))
// console.log(account.getBalance())