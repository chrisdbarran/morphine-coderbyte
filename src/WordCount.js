/*
Have the function WordCount(str) take the str string parameter being passed 
and return the number of words the string contains (ie. "Never eat shredded 
wheat" would return 4). Words will be separated by single spaces. 
*/
var exports = module.exports = {};

exports.WordCount = function (str) {
    return str.split(' ').length;   
};