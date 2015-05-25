/*
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For 
the test cases, the parameter num will be any number from 1 to 1000. 
*/
var exports = module.exports = {};

exports.SimpleAdding = function(num) {
  
    // code goes here
  if(num > 0) {
    return num + this.SimpleAdding(num -1);
  }
  return 0;   
};