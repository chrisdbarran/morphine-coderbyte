/*
Have the function SwapCase(str) take the str parameter and swap the case of 
each character. For example: if str is "Hello World" the output should be hELLO 
wORLD. Let numbers and symbols stay the way they are. 
*/
var exports = module.exports = {};

exports.SwapCase = function (str) {

  var ans = '';
  str.split('').forEach(function (letter) {
    if(letter == letter.toUpperCase()) {
        ans += letter.toLowerCase();
    } else {
        ans += letter.toUpperCase();
    } 
  });
  return ans;
};
