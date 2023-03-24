// All about Object.


let student = {
    name: "sakib",
    age: 14,
    class: 10,
    key: "value"
}

console.log(student)        //show all element of object.

console.log(student.age)    //show a perticular value / property name.

console.log(student["name"]);   // Another ways to get propertey. var dea likle variable nam ta like hobe
var proName = "class";
console.log(student[proName])


student.age = 20;
console.log(student.age)    //change value

delete student.age      //to delete a property
delete student["name"]




//------------------------------


let object= Object.keys(student);   // print all keys of obj.
console.log(object);


let value = Object.values(student);     // print all values of obj.
console.log(value);


//----------------------------

var shoopCart = {
    books: 8,
    pen: 3,
    mouse: 4,
    dog: 1,
    glass: 5
}

var key_vlu = Object.keys(shoopCart);   

//looping through object

for(var i = 0; i <key_vlu.length; i++ ) {
    // console.log(key_vlu[i]);
    // console.log(shoopCart[key_vlu[i]])

    var properteyName = key_vlu[i];
    var properteyValue = shoopCart[properteyName];

    console.log(properteyName, properteyValue);
}

console.log('---------------')
// another easy for loop

for(var properteyName in shoopCart) {
    var vlue = shoopCart[properteyName];
    console.log(properteyName, vlue);
}