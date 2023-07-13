// Question: Write a JavaScript program to check whether all the digits in a given number are the same or not?




function test_same_digit(num) {
  var first = num % 10;
  while (num) {
    if (num % 10 !== first) return false;
num = Math.floor(num / 10);
  }
  return true
}

console.log(test_same_digit(2146854));
console.log(test_same_digit(5555));
console.log(test_same_digit(9889));
