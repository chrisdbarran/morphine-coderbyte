var exports = module.exports = {};

exports.DivisionStringified = function (num1, num2) { 

 // convert number to a string and then a reversed array
   var arr = Math.round(num1 / num2).toString().split('').reverse();
   var ans = [];
   // loop over the array backwards adding a comma after every three digits
   arr.forEach(function (item, index) {
       //if it's not the first digit 
       // Insert comma after every three digits
       if((index > 0) &&  (index % 3 == 0)) {
           ans.push(',');
       } 
       ans.push(item);
   });
   
   // reverse the array and convert back to a string
   return ans.reverse().join('');
}