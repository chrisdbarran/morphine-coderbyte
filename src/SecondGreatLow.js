/*
Have the function SecondGreatLow(arr) take the array of numbers stored in arr 
and return the second lowest and second greatest numbers, respectively, 
separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the 
output should be 12 98. The array will not be empty and will contain at least 
2 numbers. It can get tricky if there's just two numbers! 
*/
var exports = module.exports = {};

exports.SecondGreatLow = function (arr) { 

  // Ensure array sorted in ascending numerical order
  arr.sort(function(a, b){return a-b;});

  // Remove duplicates from array 
  // Didn't use object as set hack !
  var nums = [];
  arr.forEach(function (num) {
    if(nums.indexOf(num) == -1) {nums.push(num);}
  });

  var answer = '';
  // If the array only consists of one number 
  // double it up
  if(nums.length == 1) {
    answer = nums[0] + ' ' + nums[0];
  } else {
    answer = nums[1] + ' ' + nums[nums.length -2];
  }
  return answer;      
};
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
//console.log(SecondGreatLow([1,2,3,100])); 