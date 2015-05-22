/*
Have the function MultiplicativePersistence(num) take the num parameter being 
passed which will always be a positive integer and return its multiplicative 
persistence which is the number of times you must multiply the digits in num 
until you reach a single digit. For example: if num is 39 then your program 
should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and 
you stop at 4. 
*/
var exports = module.exports = {};

exports.MultiplicativePersistence = function (num) {
    // recursively
    // convert num to string
    var str = num.toString();
    if(str.length == 1) { return 0;}
    // convert back to a num
    var total = str.split('').reduce(function (a,b) {
       return Number(a) * Number(b);
    });
    // add them all up
    // if length not == 1 add to recursive call.
    return 1 + this.MultiplicativePersistence(total);
};