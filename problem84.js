// Q: Create a JavaScript function that generates a random password with a specified length and complexity.


const generatePassword = (length, complexity) => {
  const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*_',
  };

  const availableCharacters = complexity
    .map(type => characters[type])
    .join('');

  return Array.from({ length }, () => 
    availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
  ).join('');
};

// Example usage:
const passwordLength = 8;
const passwordComplexity = ['lowercase', 'uppercase', 'numbers', 'symbols'];
const generatedPassword = generatePassword(passwordLength, passwordComplexity);
console.log(generatedPassword);
