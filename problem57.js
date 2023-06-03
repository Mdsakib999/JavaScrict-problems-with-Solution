// তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।


function ageCheck(a) {
    if (a % 2 == 0) {
        console.log("Age is Even");
    }
    else{
        console.log("Age is Odd");      //I can return as true & false
    }   
}

var age = 32;
ageCheck(age);
