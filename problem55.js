// Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

function hourToMin(h) {
    var min = h * 60;
    return min;
}

var hour = 1.5;

console.log(hour,"hour =", hourToMin(hour),"min");
