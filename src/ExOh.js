/*
Have the function ExOh(str) take the str parameter being passed and return the 
string true if there is an equal number of x's and o's, otherwise return the 
string false. Only these two letters will be entered in the string, no 
punctuation or numbers. For example: if str is "xooxxxxooxo" then the output 
should return false because there are 6 x's and 5 o's. 
*/
var exports = module.exports = {};

exports.ExOh = function (str) {
  var x = 0;
  var o = 0;
  
  str.split('').forEach(function(item) {
    if(item === 'x') {
        x++;
    } else {
        o++;
    }
  });

  return x === o;   
};