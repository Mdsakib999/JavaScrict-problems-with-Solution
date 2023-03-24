// Convert Fahrenheit convert it into Celsius 


function temperatureConverter(valNum) {
    let valu;
    let temC = (valNum - 32) / 1.8;

  if(temC == Math.round(temC)) {
    valu = temC;
  }
  else {
    valu = temC.toFixed(2);
  }

  return valu;

}
   
console.log("Temperature in Celsius =",temperatureConverter(103));