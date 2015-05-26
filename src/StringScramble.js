/*
Using the JavaScript language, have the function StringScramble(str1,str2) 
take both parameters being passed and return the string true if a portion of 
str1 characters can be rearranged to match str2, otherwise return the string 
false. For example: if str1 is "rkqodlw" and str2 is "world" the output should 
return true. Punctuation and symbols will not be entered with the parameters. 
*/

var exports = module.exports = {};

exports.StringScramble = function (str1, str2) {
    
    var result = true;
    var map = function (str) {
        var obj = {};
        str.split('').forEach(function (element) {
            if(obj.hasOwnProperty(element)) {
                obj[element] += 1;
            } else {
                obj[element] = 1;
            }
        });
        return obj;
    };


    var obj1 = map(str1);
    var obj2 = map(str2);


    Object.keys(obj2).forEach(function (key) {
        if(obj1.hasOwnProperty(key) && obj1[key] >= obj2[key]) {
            // do nothing
        } else { result = false;}
    });

    return result;
};