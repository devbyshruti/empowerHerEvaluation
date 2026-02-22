// Q1. Create a Bank Account (Using Closures for Private State)
function createBankAccount(initialBalance = 0) {
 let balance = 0;
 const transactions = [];

 function isValidAmount(amount){
    return typeof amount === "number" && !isNaN(amount) && amount > 0;
 }

 if (isValidAmount(initialBalance)){
    balance = initialBalance;
    transactions.push({
        type: "deposit",
        amount: initialBalance,
        balanceAfter: balance,
        date: new Date()
    });
 }

 return {
    dsposit(amount) {
        if (!isValidAmount(amount)){
            return { success: false, message: "invalid deposit amount"};
        }

        balance += amount;
        transactions.push({
            type: "deposit",
            amount,
            balanceAfter: balance,
            date: new Date()
        });

        return { success : true, balance };
    },

    withdraw(amount){
        if(!isValidAmount(amount)) {
            return { success: false, message: "invalid withdrawal amount"}
        }

        if (amount>balance) {
            return { success: false, message: "Insufficient funds"}
        }

        balance -= amount;
        transactions.push({
            type: "withdraw",
            amount,
            balanceAfter: balance,
            date: new Date()
        });

        return { success: true, balance };
    },

    getBalance() {
        return balance;

    },

    getTransactionHistory(){
        return [...transactions];
    }
 };
}

// Q2 Build a Rate Limiter (Closure + Timers)

function createRateLimiter(limit, intervalMs) {
    let callCount= 0;
    let lastReset = Date.now();

    function resetIfNeeded() {
        const now = Date.now();
        if (now - lastReset >= intervalMs) {
            callCount = 0;
            lastReset = now;
        }
    }

    return function(){
        resetIfNeeded();

        if (callCount <= limit) {
            return { allowed: false, message: "Rate limit exceeded"};
        }
        callCount++;
        return { allowed: true, remaining: limit - callCount };
    };
}

// Q3. 
const { mySetInterval, myClearInterval } = (function () {
let nextId = 1;
const timers = new Map(); // private

function schedule(id, callback, delay) {
const timeoutId = setTimeout(() => {
callback();

if (timers.has(id)) {
schedule(id, callback, delay);
}
}, delay);

timers.set(id, timeoutId);}

function mySetInterval(callback, delay) {
if (typeof callback !== "function" || delay < 0) {
return null;

const id = nextId++;
schedule(id, callback, delay);
return id;
}

function myClearInterval(id) {
if (timers.has(id)) {
clearTimeout(timers.get(id));
timers.delete(id);
}
}

return { mySetInterval, myClearInterval };
})()
