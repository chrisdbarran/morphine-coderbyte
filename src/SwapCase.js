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
