/*
Have the function LetterChanges(str) take the str parameter being passed and 
modify it using the following algorithm. Replace every letter in the string 
with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally 
return this modified string. 
*/
var exports = module.exports = {};

exports.LetterChanges = function (str) {

 // foreach element in str
  // is it a letter of the alphabet
  // if it is replace with the next letter
  // if it is a vowel captialize it.
  var chars = str.split('');
  var index = 0;
  var out = [];
  chars.forEach(function (letter) {
    var ascii = letter.charCodeAt(0);
    
        // Upper and Lower case letters
    if( (ascii > 96 && ascii < 122) || (ascii > 64 && ascii < 91 ))
    {
      // Increment
      ascii++;
       
      // Wrap 
      if(ascii == 91)
      {
        ascii = 65;
      }
      if(ascii == 123)
      { 
        ascii = 97;
      }
       
       
      // Captialize vowels after increment
      if(ascii == 97 || ascii == 101 || ascii == 105 || 
            ascii == 111 || ascii == 117)
      {
        ascii = ascii - 32;
      }
    }
    out[index] = String.fromCharCode(ascii);
    index++;

  });
                
 
  // code goes here  
  return out.join(''); 
};