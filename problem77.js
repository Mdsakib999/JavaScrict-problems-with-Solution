// Code a program to find the number of elements in both arrays using Javascript.

@param {Array} arr1 - The first array
@param {Array} arr2 - The second array
@returns {number} - The count of common elements

function countCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element)).length;
};

console.log(countCommonElements([1, 2, 3, 4], [1, 2, 3, 4]));                 // Output: 4
console.log(countCommonElements([1, 2, 3, 4], [1, 2, 3, 5]));                 // Output: 3
console.log(countCommonElements([1, 2, 3, 4], [11, 22, 33, 44]));             //
