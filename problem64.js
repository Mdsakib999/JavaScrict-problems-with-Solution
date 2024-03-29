// a JavaScript function that converts an integer into a Roman numeral??


function integer_to_roman(num) {
  if (typeof num !== 'number') return false;

  const romanNumerals = {
    M: 1000, CM: 900,
    D: 500,  CD: 400,
    C: 100,  XC: 90,
    L: 50,   XL: 40,
    X: 10,   IX: 9,
    V: 5,    IV: 4,
    I: 1
  };

  let romanNumeral = '';

  for (const key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      romanNumeral += key;
      num -= romanNumerals[key];
    }
  }

  return romanNumeral;
}

console.log(integer_to_roman(27));

