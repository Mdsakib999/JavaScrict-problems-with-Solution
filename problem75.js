// Write a function that accepts two numbers as parameters and Return a custom 'Error' if the second number is zero using JavaScript.


const divide_Numbers = (n1, n2) => {
  if (n2 === 0) {
    throw new Error('Error: Division by zero is not allowed.');
  }  
  return n1 / n2;
};



