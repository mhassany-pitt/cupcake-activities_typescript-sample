interface IBankAccount {
    owner: string;
    balance: number;
    deposit(amount: number): number;
    withdraw(amount: number): number;
}

class BankAccount implements IBankAccount {
    owner: string;
    balance: number;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): number {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log(`Deposited ${amount}`);
        }
        return this.balance;
    }

    withdraw(amount: number): number {
        if (0 < amount && amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log(`Withdrew ${amount}`);
        } else {
            console.log("Insufficient funds");
        }
        return this.balance;
    }
}

function main(): void {
    const account: BankAccount = new BankAccount("Bob", 200);
    account.deposit(100);
    account.withdraw(50);
    console.log(`Balance: ${account.balance}`);
}

main();
