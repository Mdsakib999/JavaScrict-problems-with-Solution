/* 
problem-1
You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friend's grades using if-else.

*/

var grad = 38;

// let grad = prompt("Enter your grad: ")

if (grad >= 80) {
    console.log("A grad");
}
else if( grad >= 60) {
    console.log("B grad")
}
else if( grad >= 50) {
    console.log("c grad")
}
else if( grad >= 40) {
    console.log("D grad")
}

else if (grad >=  39) {
    console.log("F grad")
}

else{
    console.log(".... You are fail!!!")
}
