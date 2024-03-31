// 


const testSameDigit = num => {
  const digit = num % 10;
  return num.toString().split('').every(d => d === digit.toString());
};

console.log(testSameDigit(1234));
console.log(testSameDigit(1111));
console.log(testSameDigit(22222222));
