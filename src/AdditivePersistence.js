/*
Have the function AdditivePersistence(num) take the num parameter being passed 
which will always be a positive integer and return its additive persistence 
which is the number of times you must add the digits in num until you reach a 
single digit. For example: if num is 2718 then your program should return 2 
because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
*/
var exports = module.exports = {};

exports.AdditivePersistence = function (num) {
    // recursively
    // convert num to string
    var str = num.toString();
    if(str.length == 1) { return 0;}
    // convert back to a num
    var total = str.split('').reduce(function (a,b) { 
        return Number(a) + Number(b);
    });
    // add them all up
    // if length not == 1 add to recursive call.
    return 1 + this.AdditivePersistence(total);
};