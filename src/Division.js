/*
Using the JavaScript language, have the function Division(num1,num2) take both 
parameters being passed and return the Greatest Common Factor. That is, return 
the greatest number that evenly goes into both numbers with no remainder. 
For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should 
be 4. The range for both parameters will be from 1 to 10^3. 
*/
var exports = module.exports = {};

exports.Division = function (num1, num2) {
 
  // Decompose both numbers into factors
  var factorise = function (num) {
    var factors = [];
    for (var i=1; i <=num; i++)
    {
        if(num % i == 0) { factors.push(i);}
    }
    return factors;
  };

  var num1Factors = factorise(num1);
  var num2Factors = factorise(num2);

  // Find the intersection of both sets

  var intersection = num1Factors.filter(function (element) {
     if(num2Factors.indexOf(element) > -1) { return true;}
  });

  // Find the max of the intersection
  return intersection.reduce(function (p,v) {
     return (p > v) ? p : v;
  });  
};