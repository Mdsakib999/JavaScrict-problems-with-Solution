/*
You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal
 */

var sid_a = 9, sid_b = 8, sid_c = 9;

if(sid_a == sid_b || sid_a == sid_c || sid_b == sid_c) {
    console.log("Triangle is Isosceles")
}
else{
    console.log("Triangle is not Isosceles")
}
