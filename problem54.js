// Simple function related Problem. Calculate your average marks?


function ave(a, b, c) {
    var total_ave = (a + b + c) / 3;
    return total_ave; 
}

var assignment1 = 50;
var assignment2 = 80;
var assignment3 = 60;

var myAverage= ave(assignment1, assignment2, assignment3);

console.log("My average marks:", myAverage.toFixed(2));
