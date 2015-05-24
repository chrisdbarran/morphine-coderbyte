/*
Have the function FirstReverse(str) take the str parameter being passed and 
return the string in reversed order. 
*/
var exports = module.exports = {};

exports.FirstReverse = function (str) {
    return str.split('').reverse().join('');   
};