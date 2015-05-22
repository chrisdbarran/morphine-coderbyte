/*
Have the function AdditivePersistence(num) take the num parameter being passed 
which will always be a positive integer and return its additive persistence 
which is the number of times you must add the digits in num until you reach a 
single digit. For example: if num is 2718 then your program should return 2 
because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
*/
var exports = module.exports = {};

exports.NumberAddition = function (str) {
    
   // regexp to match all the numbers
   var pattern = /\d+/g;

   var res = str.match(pattern);

   if(res === null) return 0;

   // Then add them up. 
   return res.reduce(function (p,v) {
     return Number(p) + Number(v);
   });
};