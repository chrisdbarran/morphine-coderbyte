var exports = module.exports = {};

exports.SwapCase = function (str) {

  var ans = "";
  str.split('').forEach(function (letter) {
     (letter == letter.toUpperCase()) ? ans += letter.toLowerCase() : ans += letter.toUpperCase();
  });
  return ans;
}
