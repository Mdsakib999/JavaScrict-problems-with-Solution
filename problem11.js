// Check whether a year is a Leap Year or not?



/*
// Way-1

let year = 1932;

if(year % 4 == 0) {
    console.log(year,"is Leap year.")
}
else{
    console.log(year,"is not Leap year.")
}

*/



// Way-2

function leapYear(x) {
    if(x % 4 == 0) {
        // return true;
        console.log(x, "is Leap Year");
    }
    else{
        // return false;
        console.log(x, "is Leap Year")
    }
}


leapYear(1940);


/* 

// Way-3

function leapYear(x) {
    if(x % 4 == 0) {
        return true;
        
    }
    else{
        return false;
        console.log(x, "is Leap Year")
    }
}


var year = leapYear(1970);
console.log("Is it leap year?",year); */




/* 
// ----------------

function leapYear(year) {
    let lip_year = [];
 
     for(let i = 0; i<year.length; i++) {
         if(year[i] % 4 ==0) {
     
             lip_year.push(year[i]);
         }
     
 }
     return lip_year;
 }
 
 let y = [2023,2025,2025,2029,2030];
 
 console.log(leapYear(y));
  */