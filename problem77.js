// Code a program to find the number of elements in both arrays using Javascript.

@param {Array} arr1 - The first array
@param {Array} arr2 - The second array
@returns {number} - The count of common elements

function countCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element)).length;
};
