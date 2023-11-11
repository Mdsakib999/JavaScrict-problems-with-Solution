// Write a program to convert a given string's length to bytes.



const byte_Size = str => new Blob([str]).size;
console.log(byte_Size('Ã¢')); 
console.log(byte_Size('Hello World'));  
console.log(byte_Size('123456'));  

