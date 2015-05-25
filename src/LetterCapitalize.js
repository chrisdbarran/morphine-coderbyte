/*
Have the function LetterCapitalize(str) take the str parameter being passed and 
capitalize the first letter of each word. Words will be separated by only one 
space. 
*/
var exports = module.exports = {};

exports.LetterCapitalize = function (str) {

  var words = str.split(' ');
  var newStr = [];
  
  words.forEach(function(word) {
    wordArr = word.split('');
    wordArr[0] = wordArr[0].toUpperCase();
    newStr.push(wordArr.join(''));    
  });  
  return newStr.join(' ');   
};