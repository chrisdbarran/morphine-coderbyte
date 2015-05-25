/*
Have the function SimpleSymbols(str) take the str parameter being passed and 
determine if it is an acceptable sequence by either returning the string true 
or false. The str parameter will be composed of + and = symbols with several 
letters between them (ie. ++d+===+c++==a) and for the string to be true each 
letter must be surrounded by a + symbol. So the string to the left would be 
false. The string will not be empty and will have at least one letter. 
*/
var exports = module.exports = {};

exports.SimpleSymbols = function (str) {
  var chars = str.split('');
  var state = true;

   chars.forEach(function (element, index, array) {
     //if it's a letter 
     // and the char before and char after are +
     // The it is valid if not false.

     if(element.match(/[a-z]/))
     {
        if(index === 0) { 
            state = false; 
        }
        if(index === array.length - 1) {
            state =  false;
        }
        if(array[index - 1] != '+' || array[index + 1] != '+') {
           state = false;
        }
     }
   });
  return state;
};