/*
Have the function DivisionStringified(num1,num2) take both parameters being 
passed, divide num1 by num2, and return the result as a string with properly 
formatted commas. If an answer is only 3 digits long, return the number with 
no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 
and num2 is 10000 the output should be "12,345". 
*/
var exports = module.exports = {};

exports.DivisionStringified = function (num1, num2) { 

 // convert number to a string and then a reversed array
   var arr = Math.round(num1 / num2).toString().split('').reverse();
   var ans = [];
   // loop over the array backwards adding a comma after every three digits
   arr.forEach(function (item, index) {
       //if it's not the first digit 
       // Insert comma after every three digits
       if((index > 0) &&  (index % 3 === 0)) {
           ans.push(',');
       } 
       ans.push(item);
   });
   
   // reverse the array and convert back to a string
   return ans.reverse().join('');
};