// Fibonacci series.

var a=0, b=1,sum,i;
var n= 10;
for(i = 1; i <= n; i++) {
    console.log(a);
    sum= a + b;
    a = b;
    b = sum;
}


// ------------another way-----------

let fibo = [0, 1];

for(var i = 2; i<= 20; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo)