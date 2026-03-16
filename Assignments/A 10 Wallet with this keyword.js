//Wallet with ‘this’ keyword
const wallet = {
    owner: "Varshini",
    balance: 0,
    lastTransaction: null,

    deposit: function(amount) {

        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "deposit",
            amount: amount,
            balanceAfter: this.balance
        };
    },

    withdraw: function(amount) {

        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdrawal amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient Balance");
            return;
        }

        this.balance -= amount;

        this.lastTransaction = {
            type: "ithdraw",
            amount: amount,
            balanceAfter: this.balance
        };
    }
};

wallet.deposit(400);
wallet.withdraw(300);
wallet.deposit(200);
console.log(wallet);