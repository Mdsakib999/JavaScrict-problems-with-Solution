// Remove duplicate items from an array using JavaScript?


// 1 way

function removeDuplicates(num) {
  return Array.from(new Set(num));
}

var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var result = removeDuplicates(Mynum);

console.log(Mynum);
console.log(result);

------------------------------------------------
  
