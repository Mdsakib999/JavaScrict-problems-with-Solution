// Q: Are the last digits of the three provided positive integers identical?



const last_digit = (x, y, z) => x > 0 && y > 0 && z > 0 && x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;


