"use strict";
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        else
            this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        else
            this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
    get accountBalance() {
        return this.balance;
    }
    calculateTax() {
        return this.balance * 0.3;
    }
}
let account = new Account(1, 'Kavi', 100);
account.deposit(50);
console.log(account.getBalance());
console.log(account.accountBalance);
