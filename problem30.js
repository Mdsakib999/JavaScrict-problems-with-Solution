// Write a function solution that takes an alphabet as a function parameter and return whether it is VOWEL or CONSONANT.



function letter(x) {
    let value;
    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
        value = "VOWEL";
    }

    else{
        value = "CONSONANT";
    }

    return value;
}

let my_letter = "u";
console.log(letter(my_letter));