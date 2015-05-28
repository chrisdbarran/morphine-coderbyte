/*
Using the JavaScript language, have the function CaesarCipher(str,num) take 
the str parameter and perform a Caesar Cipher shift on it using the num 
parameter as the shifting number. A Caesar Cipher works by shifting each letter 
in the string N places down in the alphabet (in this case N will be num). 
Punctuation, spaces, and capitalization should remain intact. For example if 
the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 
*/
var exports =  module.exports = {};

exports.CaesarCipher = function (str, num)  {
  var answer = [];
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = lowercase.toUpperCase();


  str.split('').forEach(function (letter, index) {
       // is it a lowercase alpha char?
       var a = lowercase.indexOf(letter);

      if(a > -1) {
            answer[index] = lowercase.charAt((a + num) % 26);
        } else {
            // Is it an uppercase alpha char?
            var A = uppercase.indexOf(letter);
            if( A > -1) {
                answer[index] = uppercase.charAt((A + num) % 26);
            } else {
                //It must be somthing else, don't mess with it.
                answer[index] = letter;
            }
        }
    
  });
  return answer.join('');  
};