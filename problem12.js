// Calculate the Factorial of given number...........


function factorial(num) {
   let sum = 1;
    for(let i = 1; i<= num; i++) {
        sum = sum * i
    }

    return sum;
}

let number = 5;
let my_fact = factorial(number);
console.log("Factorial of",number,"is", my_fact);
