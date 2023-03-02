// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। ?

let num = 3;

let isPrime = true;

if( num <= 1) {
    console.log("Enter greater then 1")
}
else{
    for(var i = 2; i< num; i++) {
        if(num % i == 0) {
            isPrime = false;
        }
    }
    
    if(isPrime == true) {
        console.log(`${num} is prime number`);
    }
    else{
        console.log(`${num} is not prime number;`);
    }
}


// ------------------

/* function prime(n) {
    if(n < 2) {
        return `${n} is not prime number`
    }

    for(var i = 2; i < n; i++) {
        if(n % i == 0) {
            return `${n} is not prime number`
        }
    }

    return `${n} is prime number`
}

console.log(prime(5));
 */
