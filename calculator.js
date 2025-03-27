class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calculator = new Calculator();
console.log("Add: ", calculator.add(5, 3)); // 8
console.log("Subtract: ", calculator.subtract(5, 3)); // 2
console.log("Multiply: ", calculator.multiply(5, 3)); // 15
console.log("Divide: ", calculator.divide(5, 3)); // 1.666...
console.log("Divide by zero: ", calculator.divide(5, 0)); // Error: Division by zero is not allowed.