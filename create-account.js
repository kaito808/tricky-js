function createAccount(pin, initialDeposit) {
  let balance = initialDeposit;
  let currentPin = pin;

  return {
    checkBalance(inputPin) {
      if (inputPin === currentPin) {
        return `Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit(inputPin, amount) {
      if (inputPin === currentPin) {
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw(inputPin, amount) {
      if (inputPin === currentPin) {
        if (amount <= balance) {
          balance -= amount;
          return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin(oldPin, newPin) {
      if (oldPin === currentPin) {
        currentPin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
