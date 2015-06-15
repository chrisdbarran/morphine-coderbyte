/*
Using the JavaScript language, have the function Consecutive(arr) take the 
array of integers stored in arr and return the minimum number of integers 
needed to make the contents of arr consecutive from the lowest number to the 
highest number. For example: If arr contains [4, 8, 6] then the output should 
be 2 because two numbers need to be added to the array (5 and 7) to make it a 
consecutive array of numbers from 4 to 8. Negative numbers may be entered as 
parameters and no array will have less than 2 elements. 
*/
var exports = module.exports = {};

exports.Consecutive = function (arr) {
  
  // Find the min and max values
  var min = arr.reduce(function (a,b) {
    return (a < b) ? a : b;
  });

  var max = arr.reduce(function (a,b)
  {
    return (a > b) ? a : b;
  });
  // Number of gaps = diff between max and min - 1, minus the 
  // number of numbers in the orginal array not including the maximum and min.
  var gaps = ((max - min) - 1) - (arr.length - 2);
  return gaps;  
};

