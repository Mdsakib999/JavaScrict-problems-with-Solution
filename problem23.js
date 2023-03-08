// Reverse string in different way.



let strin = "saki vai ke obosta"

let Reverse_str = ""

for(i = strin.length-1; i >= 0; i--) {

    Reverse_str += strin[i];

}
console.log(Reverse_str);




//--------------------------------- 
//----------Another way-----
// -----------word Reverse------------------ 

let str = "sakib vai boi nai";

let rev_str = str.split(" ").reverse().join(" ");    //(split a '' space na dile letter nibe], [ ' ' space dila word nibe.] split r join same takte hobe always
console.log(rev_str);



// -------------word reverse------------


function revWord(srt) {
   let rev_str = [];
   let word = srt.split(" ");
   for(let i = word.length-1; i >=0; i--) {
    rev_str.push(word[i]);
   }
   let reverse = rev_str.join(' ')

//    return reverse;       //ai ta return korle array chara sentence asbe.
   return rev_str;
}


let my_str= "ke bodda ken aso";
console.log(revWord(my_str))