class Account {
    readonly id: number //readonly cannot be changed
    name: string
    private balance: number
    nickname?: string //optional value

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount: number){
    
        if(amount <= 0){
            throw new Error('Invalid amount')
        }
        else
            this.balance += amount;
    }

    withdraw(amount: number){
        if(amount <= 0)
            throw new Error('Invalid amount')
        else
            this.balance -= amount
    }

    getBalance(): number{               // using method
        return this.balance;
    }

    get accountBalance(): number{       // using getter
        return this.balance
    }

    private calculateTax(): number{
        return this.balance*0.3
    }
}

let account = new Account(1, 'Kavi', 100)
account.deposit(50)
console.log(account.getBalance());
console.log(account.accountBalance);


