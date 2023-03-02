// একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 

function area(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;

    let area_value = Math.sqrt(s * (s - side1)* (s - side2)* (s - side3));

    return area_value;
}

console.log("area of the triangle is =",area(3,4,5));

// console.log( `The area of the triangle is ${areaValue}` );



// IF you have base and height then area = (base * height) / 2;