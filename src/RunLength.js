/*
Have the function RunLength(str) take the str parameter being passed and return 
a compressed version of the string using the Run-length encoding algorithm. 
This algorithm works by taking the occurrence of each repeating character and 
outputting that number along with a single character of the repeating sequence. 
For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any 
numbers, punctuation, or symbols. 
*/
var exports = module.exports = {};

exports.RunLength = function (str) {

    var enc = '';
    var count = 1;
    var last = str.length - 1;

    str.split('').reduce(function (p, v, index, array) {
        if(v !== p) {
            enc += String(count) + p;
            count = 1;
        } else {
            count++;
        }
        if(index === (last)) {
            enc += String(count) + array[last];
        }
        return v;
    });
    return enc;  
};