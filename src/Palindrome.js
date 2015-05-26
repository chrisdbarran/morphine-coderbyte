/*
Have the function Palindrome(str) take the str parameter being passed and 
return the string true if the parameter is a palindrome, (the string is the 
same forward as it is backward) otherwise return the string false. For 
example: "racecar" is also "racecar" backwards. Punctuation and numbers 
will not be part of the string. 
*/
var exports = module.exports = {};

exports.Palindrome = function (str) {
    var param = str.replace(/\s+/g,'');
    var reverse = param.split('').reverse().join('');
    // code goes here  
    return reverse === param;   
};