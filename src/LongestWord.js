/*
Have the function LongestWord(sen) take the sen parameter being passed and 
return the largest word in the string. If there are two or more words that are 
the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
*/
var exports = module.exports = {};

exports.LongestWord = function (sen) {

  return sen.split(' ').reduce(function(p,v){
     return (v.length > p.length) ? v : p;
  });
};