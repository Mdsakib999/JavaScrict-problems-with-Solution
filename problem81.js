// Write a JavaScript function that returns a string that has letters in alphabetical order using JS?



function alphabet_order(str) {
  // Split the string into an array of characters, sort the array, and join the characters back into a string
  return str.split('').sort().join('');
}

console.log(alphabet_order("webmaster"));

