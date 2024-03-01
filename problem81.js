// Write a JavaScript function that returns a string that has letters in alphabetical order using JS?


// Define a function named alphabet_order that takes a string parameter (str)
function alphabet_order(str) {
  // Split the string into an array of characters, sort the array, and join the characters back into a string
  return str.split('').sort().join('');
}


