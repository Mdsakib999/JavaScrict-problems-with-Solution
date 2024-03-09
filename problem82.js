// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers?


function Second_Greatest_Lowest(arr_num) {
  arr_num.sort((x, y) => x - y); 
  let unique = [...new Set(arr_num)]; 
  return [unique[1], unique[unique.length - 2]].join(','); // Return second smallest and second largest
}


console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5])); // Result
