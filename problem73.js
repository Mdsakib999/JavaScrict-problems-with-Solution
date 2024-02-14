// Write a program to get the nth element of a given array of elements using JavaScript.


const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
console.log(nthElement(['a', 'b', 'c'], 1));
console.log(nthElement(['a', 'b', 'b'], -3));

