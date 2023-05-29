/*
Problem-2
You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.  
*/

var a, b, c;
    a = 13;
    b = 79;
    c = 45;

if ( a > b && a > c) {
    console.log("a is large");
}

else if( b > a && b > c) {
    console.log("b is large");
}

else{
    console.log("c is large");
}
