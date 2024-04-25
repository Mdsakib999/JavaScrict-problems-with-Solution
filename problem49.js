// Q: Sort the itemd of an array using JS.



// Original array
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Sorted array
var arr2 = [];

var max = Math.max(...arr1);

for (var i = 0; i < arr1.length; i++) {
    var min = Math.min(...arr1.filter(num => num !== "x"));
    var pos = arr1.indexOf(min);
    arr2[i] = min;
    arr1[pos] = "x";
}


console.log(arr2);
