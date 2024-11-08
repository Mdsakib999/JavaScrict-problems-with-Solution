// DSA Implement a Stack



class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) return "No elements in stack";
        return this.items[this.items.length - 1];
    }
}

// Example usage:
let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
stack.pop();
console.log(stack.peek()); // Output: 1

