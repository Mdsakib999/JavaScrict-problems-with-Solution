
// Find the largest string of an array. 



let nam = ["sakib", "abdul Halim", "saif uddin", "mukter"]


largest = nam[0];
for (var i = 0; i <nam.length; i++) {
  console.log(nam[i], nam[i].length);

  if(nam[i].length > largest.length) {
    largest = nam[i];
  }

}

console.log(largest);





// var nam = ["sakib", "bolllllklo", "cin", "abdullah alo", "lo", "tilokkkkk"];



let longStr = "";
for(var i = 0; i < nam.length; i++) {
    console.log(nam[i].length, nam[i]);

    let element = nam[i];
    if(element.length > longStr.length) {
        longStr = element;
        // console.log(longStr)
    }
}
console.log(longStr);

// ---------------------------


/* var nam = ["sakib", "Tamim Iqbal", "Mustafujur", "abullah al", "lord shanto", "Liton das"];


var longStr = ""

for(var i = 0; i < nam.length; i++) {
  console.log(nam[i].length, nam[i]);
  if(nam[i].length > longStr.length) {
    longStr = nam[i];
  }
}

console.log(longStr); */



