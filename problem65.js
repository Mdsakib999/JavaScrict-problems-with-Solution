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
  
// Another Way

  function removeDuplicates(num) {
  var out = [];
  for (var i = 0; i < num.length; i++) {
    if (out.indexOf(num[i]) === -1) {
      out.push(num[i]);
    }
  }
  return out;
}

var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var result = removeDuplicates(Mynum);

console.log(Mynum);
console.log(result);
