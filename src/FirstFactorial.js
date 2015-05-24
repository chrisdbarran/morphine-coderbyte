/*
Have the function FirstFactorial(num) take the num parameter being passed and 
return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the 
test cases, the range will be between 1 and 18. 
*/
var exports = module.exports = {};

exports.FirstFactorial = function(num) {

 if(num === 0 ) {
    return 1;
   }
  
  var total = 0;
  total += num * this.FirstFactorial(num -1);
  // code goes here  
  return total;          
};