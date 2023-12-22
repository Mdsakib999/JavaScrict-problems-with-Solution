// Write a function for Replace each character of a given string by the next one in the English alphabet.


function alphabet_char_Shift(str) {
  var allChars = str.split("");
  for(lat i = 0; i < allChars.length; i++) {
    var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"));

