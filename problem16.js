// Swap variable, swap without temp?

 
var a, b, temp;

a = 5;
b = 9;
console.log("Before swap =",a, b);

temp = a;
a = b;
b = temp;

console.log("After swap =",a, b);


/* // Another way

let a = 5;
let b = 9;
[a, b] = [b, a];

console.log(a, b); */




// another way

let x = 10;
let y = 20;
var temp;

x = x + y;
y = x - y;
x = x- y;

console.log(x, y);