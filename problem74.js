// Write a program to capitalize the first letter of each word in a given string using Javascript??




// Create a function called capitalizeFirstLetter that takes a string as an argument
function capitalizeFirstLetter(str) {
    
    let wordsArray = str.split(" ");
    wordsArray = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    let resultString = wordsArray.join(" ");

    return resultString;
}

console.log(capitalizeFirstLetter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
