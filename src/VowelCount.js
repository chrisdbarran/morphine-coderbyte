/*
Have the function VowelCount(str) take the str string parameter being passed 
and return the number of vowels the string contains (ie. "All cows eat grass" 
would return 5). Do not count y as a vowel for this challenge. 
*/
var exports = module.exports = {};

exports.VowelCount = function (str) {
  
  var count = 0;
  
  str.split('').forEach(function(char) {
    if('aeiou'.indexOf(char ) != -1) {
      count++;
    }            
  });

  // code goes here  
  return count;   
};